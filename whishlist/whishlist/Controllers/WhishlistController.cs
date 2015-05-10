using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using whishlist.Models;
using Newtonsoft.Json;
using System.Configuration;
using whishlist.Helpers;
using System.Web.Caching;
using System.Net.Http.Headers;
using System.Web;


namespace whishlist.Controllers
{
    public class WhishlistController : ApiController
    {
        private string clientId = ConfigurationManager.AppSettings["clientId"];
        private string clientSecret = ConfigurationManager.AppSettings["clientSecret"];
        protected FourSquare.SharpSquare.Core.SharpSquare client;
        protected FourSquare.SharpSquare.Core.SharpSquare clientWithToken;
        

        public void RemoveItem(int id)
        {
            using (var db = new WhishListContext())
            {
                var item = db.WhishList.FirstOrDefault(x => x.WhishListItemId == id);                
                if (item != null)
                    db.WhishList.Remove(item);
                db.SaveChanges();                
            }            
        }
        
        public int AddItem([FromBody]WhishListItem item)
        {
            using (var db = new WhishListContext())
            {
                db.WhishList.Add(item);
                db.SaveChanges();
                return item.WhishListItemId;
            }
        }

        public List<WhishListItem> GetRecentVenues(string code)
        {
            var context = HttpContext.Current;
            
            List<WhishListItem> recentVenues = new List<WhishListItem>();
            List<WhishListItem> whishlist = new List<WhishListItem>();
            var token = "";
            var whishlistCount = 0;
            if (context != null)
            {
                if (context.Cache["token"] == null)
                {
                    client = new FourSquare.SharpSquare.Core.SharpSquare(clientId, clientSecret);
                    token = client.GetAccessToken(ConfigurationManager.AppSettings["callbackurl"], code);
                    context.Cache["token"] = token;
                }
                else 
                {
                    token = context.Cache["token"].ToString();
                }
            }            
            
            clientWithToken = new FourSquare.SharpSquare.Core.SharpSquare(clientId, clientSecret, token);
            
            //get user data
            var user = clientWithToken.GetUser("self");

            //get venues already added
            using (var db = new WhishListContext())
            {
                whishlist = db.WhishList.ToList();
                whishlistCount = db.WhishList.Count();
            }

            //get recent checkins
            string limit = (int.Parse(ConfigurationManager.AppSettings["limitOfRecentVenues"]) + whishlistCount).ToString();
            var recent = clientWithToken.GetRecentCheckin(new Dictionary<string, string>
            {
                    { "limit", limit}                    
            });

            foreach (var i in recent)
            {
                //remove those that already are in the whishlist
                if (!whishlist.Any(x => x.VenueId == i.venue.id))
                {
                    var venuePicListAux = clientWithToken.GetVenuePhotos(i.venue.id, null);
                    var pic = venuePicListAux.Count > 0 ? venuePicListAux.ElementAt(0) : null;
                    var usrPicAux = PictureHelper.GetUserPictureUrl(i.user);

                    recentVenues.Add(new WhishListItem
                    {
                        UserId = i.user.id,
                        VenueId = i.venue.id,
                        VenuePictureUrl = pic == null ? "/content/images/no_image.png" : PictureHelper.GetVenuePictureUrl(pic),
                        UserPictureUrl = usrPicAux,
                        VenueName = i.venue.name,
                        WhishListItemId = 0
                    });
                }
            }

            return recentVenues;
        }

        public List<WhishListItem> GetWhishlist()
        {
            var whishlist = new List<WhishListItem>();
            //get venues already added
            using (var db = new WhishListContext())
            {
                whishlist = db.WhishList.ToList();
            }
            return whishlist;
        }

    }
}
