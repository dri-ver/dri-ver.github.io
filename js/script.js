$(function() {
    $("#header-wrapper").animate({opacity: 1}, 350, function() {
        $("#bio-wrapper").animate({opacity: 1}, 350, function() {
            $("#spotify-player-wrapper").animate({opacity: 1}, 350);
        });
    });
});