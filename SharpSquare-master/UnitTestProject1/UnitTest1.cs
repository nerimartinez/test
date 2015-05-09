using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        private const string clientId = "5GPK3PFTPOMMV0ILJZK2XYK2NYSKPXYXQHSCC50UE20SDP22";
        private const string clientSecret = "SNY0VVTLFY3TTH2BFSR24FIBTCQADV0452WCII1M43RHLF1H";

        protected FourSquare.SharpSquare.Core.SharpSquare client;

        [TestMethod]
        public void TestMethod1()
        {
        
            client = new FourSquare.SharpSquare.Core.SharpSquare(clientId, clientSecret);
            var venues = client.SearchVenues(new Dictionary<string, string>
            {
                    { "near","istanbul" },
                    { "query","yapı kredi" }
            });

            int u = venues.Count;
            var i = client.GetAuthenticateUrl("http://localhost:3000/foursquare/callback");

            var token = client.GetAccessToken(i, "token");
            

            var t = client.GetRecentCheckin(new Dictionary<string, string> { { "limit", "20" } });
        }
    }
}
