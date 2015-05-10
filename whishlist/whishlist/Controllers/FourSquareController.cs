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
        protected FourSquare.SharpSquare.Core.SharpSquare clientWithToken;

        //[OutputCache(Duration = 300, VaryByParam = "none")]
        public ActionResult Callback(string code)
        {
            return View();
        }

    }
}
