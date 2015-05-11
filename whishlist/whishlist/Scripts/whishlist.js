$.get("/api/whishlist/GetUserData?code=" + getURLParameter("code"), function (data) {
    $("#userName").append("<p>" + data.Name + "</p>")
    $("#userPicture").append("<img src='" + data.PictureUrl + "' style=' height:70px;width:auto;border-radius: 25px; border: 2px solid #8AC007;'/> ")
});

function mappedItem(data) {
    this.VenueName = data.VenueName;
    this.VenueId = data.VenueId;
    this.UserId = data.UserId;
    this.VenuePictureUrl = data.VenuePictureUrl;
    this.UserPictureUrl = data.UserPictureUrl;
    this.WhishListItemId = data.WhishListItemId;
    this.Email = data.VenueEmail;
    this.Description = data.VenueDescription;
    this.Street = data.VenueStreet;
}

function whishlistViewModel() {
    var self = this;
    self.recent = ko.observableArray([]);
    self.whishlist = ko.observableArray([]);

    self.addToWhishlist = function (item) {
        $.post("/api/whishlist/additem", item, function (data) {
            item.WhishListItemId = data;
            self.whishlist.push(item);
            self.recent.remove(item);
            if ((self.whishlist().length > 0) && (!$('#whishlistcontainer').is(':visible'))) {
                $("#whishlistcontainer").slideDown();
                $("#titleWishlist").text("Whishlist");
            }
        });
    }

    self.removeFromWhishlist = function (item) {
        $.post("/api/whishlist/removeitem?id=" + item.WhishListItemId, function (data) {
            item.WhishListItemId = 0;
            self.recent.push(item);
            self.whishlist.remove(item);
            if (self.whishlist().length == 0) {
                $("#whishlistcontainer").slideUp();
                $("#titleWishlist").text("Whishlist is empty");
            }
        });
    }

    $.get("/api/whishlist/GetWhishlist", function (data) {
        var mappedWhishlist = $.map(data, function (item) { return new mappedItem(item) });
        if (data.length == 0) { $("#whishlistcontainer").slideUp(); $("#titleWishlist").text("Whishlist is empty"); }
        self.whishlist(mappedWhishlist);
        $("#spinnerWhishlist").hide();
    });

    $.get("/api/whishlist/GetRecentVenues?code=" + getURLParameter("code"), function (data) {
        var mappedRecent = $.map(data, function (item) { return new mappedItem(item) });
        self.recent(mappedRecent);
        $("#spinnerRecent").hide();
    });
}

ko.applyBindings(new whishlistViewModel());



function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}
