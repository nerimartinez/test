using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using whishlist.Models;

namespace whishlist.Models
{
    public class WhishListContext  : DbContext 
    {
        public DbSet<WhishListItem> WhishList { get; set; }
    }
}