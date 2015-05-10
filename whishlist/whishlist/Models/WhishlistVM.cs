using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace whishlist.Models
{
    public class WhishlistVM
    {
        public List<WhishListItem> recentVenues = new List<WhishListItem>();
        public List<WhishListItem> whishlist = new List<WhishListItem>();
    }
}