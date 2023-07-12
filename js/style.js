gsap.to('.imageContainer', {
    width: '100%',
    ease: Expo.easeInOut,
    stagger: 2
});

gsap.to('.text h1', {
    duration: 2,
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: '-85%'
    // top: '-126px'
})


// GSAP TimelineMax stagger loop

var tl = new TimelineMax({repeat:-1, repeatDelay:0.5});

tl.staggerFrom("span", 1.5, {top:-100, opacity:0, delay:0.5, ease: Elastic.easeOut.config(0.9, 0.45)}, 0.6);
tl.staggerTo("span", 1, {top:200, opacity:0, delay:2, ease:Power4.easeIn},0.1);


