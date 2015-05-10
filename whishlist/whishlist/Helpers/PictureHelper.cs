using FourSquare.SharpSquare.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace whishlist.Helpers
{
    public static class PictureHelper
    {
        public static string GetVenuePictureUrl(Photo photo)
        {
            return photo.prefix + ConfigurationManager.AppSettings["venueImgSize"] + photo.suffix;
        }

        public static string GetUserPictureUrl(User user)
        {
            return user.photo.prefix + ConfigurationManager.AppSettings["venueImgSize"] + user.photo.suffix;
        }
    }
}