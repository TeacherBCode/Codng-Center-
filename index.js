$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#upArrow").removeClass("invisible");
    } else {
        $("#upArrow").addClass("invisible");
    }
});


