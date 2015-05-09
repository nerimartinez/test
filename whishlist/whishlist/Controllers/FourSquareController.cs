using FourSquare.SharpSquare.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Caching;
using System.Web.Mvc;
using whishlist.Models;
using Newtonsoft.Json;

namespace whishlist.Controllers
{
    public class FourSquareController : Controller
    {
        private string clientId = ConfigurationManager.AppSettings["clientId"];
        private string clientSecret = ConfigurationManager.AppSettings["clientSecret"];
        protected FourSquare.SharpSquare.Core.SharpSquare client;
        protected FourSquare.SharpSquare.Core.SharpSquare clientwt;
        string token = string.Empty;
        List<WhishListItem> recentVenues = new List<WhishListItem>();
        List<WhishListItem> whishlist = new List<WhishListItem>();

        //[OutputCache(Duration = 300, VaryByParam = "none")]
        public ActionResult Callback(string code)
        {
            
            if (token == string.Empty)
            {
                client = new FourSquare.SharpSquare.Core.SharpSquare(clientId, clientSecret);
                token = client.GetAccessToken(ConfigurationManager.AppSettings["callbackurl"], code);                
            }

            clientwt = new FourSquare.SharpSquare.Core.SharpSquare(clientId, clientSecret, token);

            //get venues already added
            using (var db = new WhishListContext())
            {
                whishlist = db.WhishList.ToList();
            } 

            //get recent checkins
            string limit = (int.Parse(ConfigurationManager.AppSettings["limitOfRecentVenues"]) + whishlist.Count()).ToString();
            var recent = clientwt.GetRecentCheckin(new Dictionary<string, string>
            {
                    { "limit", limit}                    
            });

            
            
            foreach (var i in recent)
            {   
                if (!whishlist.Any(x => x.VenueId == i.venue.id))
                {
                    var venuePicListAux = clientwt.GetVenuePhotos(i.venue.id, null);
                    var pic = venuePicListAux.Count > 0 ? venuePicListAux.ElementAt(0) : null;
                    var usrPicAux = GetUserPictureUrl(i.user);

                    recentVenues.Add(new WhishListItem
                    {
                        UserId = i.user.id,
                        VenueId = i.venue.id,
                        VenuePictureUrl = pic == null ? "/content/images/no_image.png" : GetVenuePictureUrl(pic),
                        UserPictureUrl = usrPicAux,
                        VenueName = i.venue.name,
                        WhishListItemId = 0
                    });
                }
            }
            ViewBag.RecentVenues =  recentVenues;
            ViewBag.WhishList = whishlist;
                        
            return View();
        }

        private string GetVenuePictureUrl(Photo photo)
        {
            return photo.prefix + ConfigurationManager.AppSettings["venueImgSize"] + photo.suffix;
        }

        private string GetUserPictureUrl(User user)
        {
            return user.photo.prefix + ConfigurationManager.AppSettings["venueImgSize"] + user.photo.suffix;
        }

    }
}
