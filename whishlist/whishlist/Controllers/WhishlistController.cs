using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using whishlist.Models;
using Newtonsoft.Json;


namespace whishlist.Controllers
{
    public class WhishlistController : ApiController
    {
        
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
    }
}
