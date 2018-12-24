$(document).ready(function() {

    let controller = new ScrollMagic.Controller();

    let p1Scene = new ScrollMagic.Scene({
        triggerElement: ".p1-1",
        duration: 50,
        triggerHook: "0.75"
    })
        .on("start", function(event) {
            switch (event.scrollDirection) {
                case "FORWARD":
                    $(".pic").moveUp();
                    setTimeout(function () { // wait .pic to finish transition
                        $(".p1-2").addClass("expand-move");
                    }, 500);
                    break;
                case "REVERSE":
                    $(".p1-2").removeClass("expand-move");
                    setTimeout(function () { // wait .p1-2 to finish transition
                        $(".pic").moveBack();
                    }, 1000);
                    break;
            }
        })
        .on("end", function(event) {
            switch (event.state) {
                case "DURING":
                    $(".p1-1, .p1-2").removeClass("fixed");
                    break;
                case "AFTER":
                    // make position: fixed for .p1-1>h5 .p1-1>h1
                    let scrollTop = $(window).scrollTop();
                    let windowCenterPos = $(window).width() / 2;
                    let p11h5Top = $(".p1-1 h5").offset().top - scrollTop;
                    let p11h5Left = windowCenterPos - 310.59 / 2 ;
                    let p12h1Top = $(".p1-2 h1").offset().top - scrollTop;
                    let p12h1Left = windowCenterPos - 320.44 / 2;

                    $(".p1-1 h5").css("top", p11h5Top).css("left", p11h5Left);
                    $(".p1-2 h1").css("top", p12h1Top).css("left", p12h1Left);
                    $(".p1-1, .p1-2").addClass("fixed");

                    // Fade out p1-1
                    $(window).on("scroll", function() {
                        $(".p1-1").css("opacity", 1 - ($(window).scrollTop() - scrollTop) / 300);
                    });
                    break;
            }
        })
        .addIndicators()
        .addTo(controller);

    let p13Tween = new TweenMax.fromTo(".p1-3", 1, {opacity: 0}, {opacity: 1});
    let p13Scene = new ScrollMagic.Scene({
        triggerElement: ".p1-3",
        duration: 50,
        triggerHook: "0.75"
    })
        .on("end", function(event) {
            switch (event.state) {
                case "DURING":
                    $(".p1-3").removeClass("fixed");
                    break;
                case "AFTER":
                    // make position: fixed for .p1-1>h5 .p1-1>h1
                    let scrollTop = $(window).scrollTop();
                    let windowCenterPos = $(window).width() / 2;
                    let p13h5Top = $(".p1-3 h5").offset().top - scrollTop;
                    let p13h5Left = windowCenterPos - 481.3 / 2 ;

                    $(".p1-3 h5").css("top", p13h5Top).css("left", p13h5Left);
                    $(".p1-3").addClass("fixed");

                    // Fade out p1-3
                    $(window).on("scroll", function() {
                        $(".p1-3").css("opacity", 1 - ($(window).scrollTop() - scrollTop) / 300);
                    });
                    break;
            }
        })
        .setPin(".p1-3")
        .setTween(p13Tween)
        .addIndicators()
        .addTo(controller);

    let p14Tween = new TweenMax.fromTo(".p1-4", 1, {opacity: 0}, {opacity: 1});
    let p14Scene = new ScrollMagic.Scene({
        triggerElement: ".p1-4",
        duration: 50,
        triggerHook: "0.75"
    })
        .on("end", function (event) {
            switch (event.state) {
                case "DURING":
                    $(".pic").addClass("fixed");
                case "AFTER":
                    $(".pic").removeClass("fixed");
            }
        })
        .setPin(".p1-4")
        .setTween(p14Tween)
        .addIndicators()
        .addTo(controller);
});

$.fn.moveUp = function () {
    this.css({ "transform": "translateY(-80px)" });
};

$.fn.moveBack = function () {
    this.css({ "transform": "translateY(0px)" });
};