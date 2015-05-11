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
            List<WhishListItem> recentVenues = new List<WhishListItem>();
            List<WhishListItem> whishlist = new List<WhishListItem>();
            var whishlistCount = 0;

            if (clientWithToken == null)
                clientWithToken = GetClient(code);

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

            foreach (var item in recent)
            {
                //remove those that already are in the whishlist
                if (!whishlist.Any(x => x.VenueId == item.venue.id))
                {
                    var venuePicListAux = clientWithToken.GetVenuePhotos(item.venue.id, null);
                    var pic = venuePicListAux.Count > 0 ? venuePicListAux.ElementAt(0) : null;
                    var usrPicAux = PictureHelper.GetUserPictureUrl(item.user);
                    
                    recentVenues.Add(new WhishListItem
                    {
                        UserId = item.user.id,
                        VenueId = item.venue.id,
                        VenuePictureUrl = pic == null ? ConfigurationManager.AppSettings["noImagePath"] : PictureHelper.GetVenuePictureUrl(pic),
                        UserPictureUrl = usrPicAux,
                        VenueName = item.venue.name,
                        WhishListItemId = 0,
                        VenueStreet = item.venue.location.crossStreet + " - " + item.venue.location.city,
                        VenueDescription = item.venue.description,
                        VenueEmail = item.venue.contact.email
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
                if (db.WhishList.Count() > 0)
                    whishlist = db.WhishList.ToList();
            }
            return whishlist;
        }

        public UserVM GetUserData(string code)
        {
            if (clientWithToken == null)
                clientWithToken = GetClient(code);
            var user = clientWithToken.GetUser("self");
            return new UserVM()
            {
                Name = user.firstName + " " + user.lastName,
                PictureUrl = PictureHelper.GetUserPictureUrl(user)
            };
        }

        private FourSquare.SharpSquare.Core.SharpSquare GetClient(string code)
        {
            var token = "";
            var context = HttpContext.Current;
            if (context != null)
            {//get token from cache
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
            return new FourSquare.SharpSquare.Core.SharpSquare(clientId, clientSecret, token);
        }
    }

}
