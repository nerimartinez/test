using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using whishlist.Models;

namespace whishlist.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LogIn()
        {            
            var urlToLogin = ConfigurationManager.AppSettings["loginPrefix"] + ConfigurationManager.AppSettings["clientId"] + ConfigurationManager.AppSettings["loginSuffix"];
            return Redirect(urlToLogin);
        }
    }
}
