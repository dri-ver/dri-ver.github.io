$(function() {
    $("#header-wrapper").animate({opacity: 1}, 500, function() {
        $("#bio-wrapper").animate({opacity: 1}, 500, function() {
            $("#spotify-player-wrapper").animate({opacity: 1}, 500);
        });
    });
});