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
        public ActionResult Callback(string code)
        {
            return View();
        }
    }
}
