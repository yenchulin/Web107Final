$(document).ready(function() {

    let controller = new ScrollMagic.Controller();

    let p1TweenTimeline = new TimelineMax();
    p1TweenTimeline
        .to(".pic", 0.5, {transform: "translateY(-80px)", zIndex: "-1"})
        .fromTo(".p1-2", 1, {transform: "translate(80px, -370px) scale(0)"}, {transform: "translate(0px, -800px) scale(1)"});

    let p0Scene = new ScrollMagic.Scene({
        offset: 300,
    })
        .setTween(p1TweenTimeline)
        .setPin(".p1-2")
        // .addIndicators()
        .addTo(controller);

    let p11FixedScene = new ScrollMagic.Scene({
        offset: p0Scene.scrollOffset()
    })
        .setPin(".p1-1")
        // .addIndicators()
        .addTo(controller);

    let p11FadeOutTween = new TweenMax.fromTo(".p1-1", 0.5, {opacity: 1}, {opacity: 0});
    new ScrollMagic.Scene({
        offset: p11FixedScene.scrollOffset() + 50,
        duration: 150
    })
        .setTween(p11FadeOutTween)
        // .addIndicators({name: "p11out"})
        .addTo(controller);

    let p13FixedScene = new ScrollMagic.Scene({
        offset: 700
    })
        .setPin(".p1-3")
        // .addIndicators({name: "p13fixed"})
        .addTo(controller);

    let p13FadeInTween = new TweenMax.to(".p1-3", 0.5, {opacity: 1});
    new ScrollMagic.Scene({
        offset: p13FixedScene.scrollOffset(),
        duration: 150
    })
        .setTween(p13FadeInTween)
        // .addIndicators({name: "p13in"})
        .addTo(controller);

    let p13FadeOutTween = new TweenMax.to(".p1-3", 0.5, {opacity: 0});
    new ScrollMagic.Scene({
        offset: 850,
        duration: 150
    })
        .setTween(p13FadeOutTween)
        // .addIndicators({name: "p13out"})
        .addTo(controller);

    let p14FixedScene = new ScrollMagic.Scene({
        offset: 1050
    })
        .setPin(".p1-4")
        // .addIndicators({name: "p14fixed"})
        .addTo(controller);

    let p14FadeInTween = new TweenMax.to(".p1-4", 0.5, {opacity: 1});
    new ScrollMagic.Scene({
        offset: p14FixedScene.scrollOffset(),
        duration: 150
    })
        .setTween(p14FadeInTween)
        // .addIndicators({name: "p14in"})
        .addTo(controller);

    let picp12Scrollup = new TimelineMax();
    picp12Scrollup
        .to(".pic", 1, {transform: "translateY(-600px)"})
        .to(".p1-4", 1, {transform: "translateY(-600px)"}, 0)
        .to(".p1-2", 1, {transform: "translateY(-1400px)"}, 0);
    new ScrollMagic.Scene({
        offset: p14FixedScene.scrollOffset() + 150,
        duration: 200
    })
        .setTween(picp12Scrollup)
        // .addIndicators({name: "scroll up"})
        .addTo(controller);

    // Page 2
    let p21FixedScene = new ScrollMagic.Scene({
        offset: 1950
    })
        .setPin(".p2-1")
        // .addIndicators({name: "p21fixed"})
        .addTo(controller);

    let p21FadeOutTween = new TweenMax.fromTo(".p2-1", 0.5, {opacity: 1}, {opacity: 0});
    let p21FadeOutScene = new ScrollMagic.Scene({
        offset: p21FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p21FadeOutTween)
        // .addIndicators({name: "p21out"})
        .addTo(controller);

    let p22FixedScene = new ScrollMagic.Scene({
        offset: p21FadeOutScene.scrollOffset() + p21FadeOutScene.duration(),
    })
        .setPin(".p2-2")
        // .addIndicators({name: "p22fixed"})
        .addTo(controller);

    let p22FadeOutTween = new TweenMax.to(".p2-2", 0.5, {opacity: 0});
    new ScrollMagic.Scene({
        offset: p22FixedScene.scrollOffset() + p22FixedScene.duration(),
        duration: 150
    })
        .setTween(p22FadeOutTween)
        // .addIndicators({name: "p22out"})
        .addTo(controller);

    // Page 3
    let p31FixedScene = new ScrollMagic.Scene({
        offset: $(".p3").offset().top + 50
    })
        .setPin(".p3-1")
        // .addIndicators({name: "p31fixed"})
        .addTo(controller);

    let p31FadeOutTween = new TweenMax.fromTo(".p3-1", 0.5, {opacity: 1}, {opacity: 0});
    let p31FadeOutScene = new ScrollMagic.Scene({
        offset: p31FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p31FadeOutTween)
        // .addIndicators({name: "p31out"})
        .addTo(controller);

    let p32FixedScene = new ScrollMagic.Scene({
        offset: p31FadeOutScene.scrollOffset() + p31FadeOutScene.duration(),
    })
        .setPin(".p3-2")
        // .addIndicators({name: "p32fixed"})
        .addTo(controller);

    let p32FadeOutTween = new TweenMax.fromTo(".p3-2", 0.5, {opacity: 1}, {opacity: 0});
    let p32FadeOutScene = new ScrollMagic.Scene({
        offset: p32FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p32FadeOutTween)
        // .addIndicators({name: "p32out"})
        .addTo(controller);

    let p33FixedScene = new ScrollMagic.Scene({
        offset: p32FadeOutScene.scrollOffset() + p32FadeOutScene.duration(),
    })
        .setPin(".p3-3")
        // .addIndicators({name: "p33fixed"})
        .addTo(controller);

    let p33FadeOutTween = new TweenMax.fromTo(".p3-3", 0.5, {opacity: 1}, {opacity: 0});
    let p33FadeOutScene = new ScrollMagic.Scene({
        offset: p33FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p33FadeOutTween)
        // .addIndicators({name: "p33out"})
        .addTo(controller);

    let p34FixedScene = new ScrollMagic.Scene({
        offset: p33FadeOutScene.scrollOffset() + p33FadeOutScene.duration(),
    })
        .setPin(".p3-4")
        // .addIndicators({name: "p34fixed"})
        .addTo(controller);

    let p34FadeOutTween = new TweenMax.fromTo(".p3-4", 0.5, {opacity: 1}, {opacity: 0});
    new ScrollMagic.Scene({
        offset: p34FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p34FadeOutTween)
        // .addIndicators({name: "p34out"})
        .addTo(controller);

    // Page 4
    let p41FixedScene = new ScrollMagic.Scene({
        offset: $(".p4").offset().top + 50
    })
        .setPin(".p4-1")
        // .addIndicators({name: "p41fixed"})
        .addTo(controller);

    let p41FadeOutTween = new TweenMax.fromTo(".p4-1", 0.5, {opacity: 1}, {opacity: 0});
    let p41FadeOutScene = new ScrollMagic.Scene({
        offset: p41FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p41FadeOutTween)
        // .addIndicators({name: "p41out"})
        .addTo(controller);

    let p42FixedScene = new ScrollMagic.Scene({
        offset: p41FadeOutScene.scrollOffset() + p41FadeOutScene.duration()
    })
        .setPin(".p4-2")
        // .addIndicators({name: "p42fixed"})
        .addTo(controller);

    let p4p42Scrollup = new TimelineMax();
    p4p42Scrollup
        .to(".p4", 1, {backgroundPosition: "50% -130%"})
        .to(".p4-2", 1, {transform: "translateY(-90vh)"}, 0);
    new ScrollMagic.Scene({
        offset: p42FixedScene.scrollOffset() + 150,
        duration: 200
    })
        .setTween(p4p42Scrollup)
        // .addIndicators({name: "scroll up"})
        .addTo(controller);

    // Page 5
    let p51FixedScene = new ScrollMagic.Scene({
        offset: $(".p5").offset().top + 45
    })
        .setPin(".p5-1")
        // .addIndicators({name: "p51fixed"})
        .addTo(controller);

    let p51FadeOutTween = new TweenMax.fromTo(".p5-1", 0.5, {opacity: 1}, {opacity: 0});
    let p51FadeOutScene = new ScrollMagic.Scene({
        offset: p51FixedScene.scrollOffset() + 45,
        duration: 140
    })
        .setTween(p51FadeOutTween)
        // .addIndicators({name: "p51out"})
        .addTo(controller);

    let p52FixedScene = new ScrollMagic.Scene({
        offset: p51FadeOutScene.scrollOffset() + p51FadeOutScene.duration()
    })
        .setPin(".p5-2")
        // .addIndicators({name: "p52fixed"})
        .addTo(controller);

    let p52FadeOutTween = new TweenMax.fromTo(".p5-2", 0.5, {opacity: 1}, {opacity: 0});
    new ScrollMagic.Scene({
        offset: p52FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p52FadeOutTween)
        // .addIndicators({name: "p52out"})
        .addTo(controller);

    // Page 6
    let p61FixedScene = new ScrollMagic.Scene({
        offset: $(".p6").offset().top - 245
    })
        .setPin(".p6-1")
        // .addIndicators({name: "p61fixed"})
        .addTo(controller);

    let p6p61Scrollup = new TimelineMax();
    p6p61Scrollup
        .to(".p6", 1, {backgroundPosition: "50% -130%"})
        .to(".p6-1", 1, {transform: "translateY(-90vh)"}, 0);
    new ScrollMagic.Scene({
        offset: p61FixedScene.scrollOffset() + 250,
        duration: 200
    })
        .setTween(p6p61Scrollup)
        // .addIndicators({name: "scroll up"})
        .addTo(controller);

    // Page 7
    let p71FixedScene = new ScrollMagic.Scene({
        offset: $(".p7").offset().top + 50
    })
        .setPin(".p7-1")
        // .addIndicators({name: "p71fixed"})
        .addTo(controller);

    let p71FadeOutTween = new TweenMax.fromTo(".p7-1", 0.5, {opacity: 1}, {opacity: 0});
    let p71FadeOutScene = new ScrollMagic.Scene({
        offset: p71FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p71FadeOutTween)
        // .addIndicators({name: "p71out"})
        .addTo(controller);

    let p72FixedScene = new ScrollMagic.Scene({
        offset: p71FadeOutScene.scrollOffset() + p71FadeOutScene.duration()
    })
        .setPin(".p7-2")
        // .addIndicators({name: "p72fixed"})
        .addTo(controller);

    let p72FadeOutTween = new TweenMax.fromTo(".p7-2", 0.5, {opacity: 1}, {opacity: 0});
    let p72FadeOutScene = new ScrollMagic.Scene({
        offset: p72FixedScene.scrollOffset() + 35,
        duration: 140
    })
        .setTween(p72FadeOutTween)
        // .addIndicators({name: "p72out"})
        .addTo(controller);

    let p73FixedScene = new ScrollMagic.Scene({
        offset: p72FadeOutScene.scrollOffset() + p72FadeOutScene.duration()
    })
        .setPin(".p7-3")
        // .addIndicators({name: "p73fixed"})
        .addTo(controller);

    let p73FadeOutTween = new TweenMax.fromTo(".p7-3", 0.5, {opacity: 1}, {opacity: 0});
    let p73FadeOutScene = new ScrollMagic.Scene({
        offset: p73FixedScene.scrollOffset() + 50,
        duration: 140
    })
        .setTween(p73FadeOutTween)
        // .addIndicators({name: "p73out"})
        .addTo(controller);

    let p74FixedScene = new ScrollMagic.Scene({
        offset: p73FadeOutScene.scrollOffset() + p73FadeOutScene.duration()
    })
        .setPin(".p7-4")
        // .addIndicators({name: "p74fixed"})
        .addTo(controller);

    let p7p74Scrollright = new TimelineMax();
    p7p74Scrollright
        .to(".p7", 1, {backgroundPosition: "200% 25%"})
        .to(".p7-4", 1, {transform: "translateX(80vw)"}, 0);
    new ScrollMagic.Scene({
        offset: p74FixedScene.scrollOffset() + 150,
        duration: 200
    })
        .setTween(p7p74Scrollright)
        // .addIndicators({name: "scroll right"})
        .addTo(controller);

    // Page 8
    let p81FixedScene = new ScrollMagic.Scene({
        triggerElement: ".p8-1",
        offset: 50,
        duration: $(".p8-1").height()/2  + 150
    })
        .setPin(".p8-1")
        // .addIndicators({name: "p81fixed"})
        .addTo(controller);

    let p81FadeInTween = new TweenMax.to(".p8-1", 0.5, {opacity: 1});
    let p81FadeInScene = new ScrollMagic.Scene({
        offset: p81FixedScene.scrollOffset() + $(".p8-1").height()/2,
        duration: 150
    })
        .setTween(p81FadeInTween)
        // .addIndicators({name: "p81in"})
        .addTo(controller);

    let picScrollDown_p82MoveUpTween = new TimelineMax();
    picScrollDown_p82MoveUpTween
        .to(".pic", 0.5, {transform: "translateY(0)"})
        .to(".p8-2", 0.5, {transform: "translateY(-250px)"}, 0);
    let picScrollDown_p82MoveUpScene = new ScrollMagic.Scene({
        offset: p81FadeInScene.scrollOffset() + p81FadeInScene.duration(),
        duration: 150
    })
        .setTween(picScrollDown_p82MoveUpTween)
        // .addIndicators({name: "pic down"})
        .addTo(controller);

    let p81FixedAgainScene = new ScrollMagic.Scene({
        offset: picScrollDown_p82MoveUpScene.scrollOffset() + picScrollDown_p82MoveUpScene.duration() + 40
    })
        .setPin(".p8-1")
        // .addIndicators({name: "p81fixed"})
        .addTo(controller);

    let p82FixedScene = new ScrollMagic.Scene({
        offset: p81FixedAgainScene.scrollOffset()
    })
        .setPin(".p8-2")
        // .addIndicators({name: "p82fixed"})
        .addTo(controller);

    let p82FadeOutTween = new TweenMax.to(".p8-2", 0.5, {opacity: 0});
    let p82FadeOutScene = new ScrollMagic.Scene({
        offset: p82FixedScene.scrollOffset(),
        duration: 500
    })
        .setTween(p82FadeOutTween)
        // .addIndicators({name: "p82out"})
        .addTo(controller);

    new ScrollMagic.Scene({
        offset: p82FadeOutScene.scrollOffset() + p82FadeOutScene.duration()
    })
        .setPin(".p8-3")
        // .addIndicators({name: "p83fixed"})
        .addTo(controller);
});