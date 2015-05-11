using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace whishlist.Models
{
    public class WhishListItem
    {
        public int WhishListItemId { get; set; } 
        public string UserId { get; set; }
        public string VenueId { get; set; }
        public string VenuePictureUrl { get; set; }
        public string UserPictureUrl { get; set; }
        public string VenueName { get; set; }
        public string VenueEmail { get; set; }
        public string VenueStreet { get; set; }
        public string VenueDescription { get; set; }
    }
}