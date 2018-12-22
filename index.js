$(document).ready(function () {
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop() / $(window).height();
        console.log(scrollTop);

        if (scrollTop >= 0.4) {
            $(".pic").moveUp();
            setTimeout(() => {
                $(".text .p1-2").expandMove();
            }, 500);
        } else if (scrollTop === 0) {
            $(".pic").moveBack();
        }
    });
});

$.fn.moveUp = function () {
    this.css({ "transform": "translateY(-80px)" });
};

$.fn.moveBack = function () {
    this.css({ "transform": "translateY(0px)" });
};

$.fn.expandMove = function () {
    this.css({ "transform": "translate(0px, 0px) scale(1)" });
};

$.fn.fadeout = function () {
    this.css({ "opacity": "0" });
};