$(document).ready(function () {
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop() / $(window).height();
        if (scrollTop >= 0.4) {
            $(".pic").moveUp();
        } else if (scrollTop == 0) {
            $(".pic").moveBack();
        }
    });
});

$.fn.moveUp = function () {
    this.css({ "transform": "translate(0px,-80px)" });
};

$.fn.moveBack = function () {
    this.css({ "transform": "translate(0px,0px)" });
};