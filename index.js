$(document).ready(function () {
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let picMovePos = 300; // pic should move when scrollPos equals 300
        let p11FixedPos = $(".p1-2").position().top; // p1-1 should fadeout when p1-2 showed up

        console.log(scrollPos, p11FixedPos, $(".p1-1").position().top);

        if (scrollPos > picMovePos) {
            $(".pic").moveUp();
            setTimeout(() => {
                $(".text .p1-2").expandMove();
            }, 500);
        } else if (scrollPos === 0) {
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
    this.css({ "transform": "translate(0px, -450px) scale(1)" });
};

$.fn.expandBack = function () {
    this.removeAttr("style");
};