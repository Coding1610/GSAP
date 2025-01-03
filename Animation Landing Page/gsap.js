var tl = gsap.timeline();

tl.from("nav h1",{
    x:-40,
    opacity:0,
    duration:0.7,
    delay:0.5,
    ease:"back.out(2)",
});

tl.from("nav button",{
    x:40,
    opacity:0,
    duration:0.7,
    // delay:1,
    ease:"back.out(2)",
});

tl.from("nav h4",{
    opacity:0,
    y:-40,
    duration:0.7,
    // delay:1,
    stagger:0.15,
    ease:"back.out(2)",
});

tl.from(".centerPart1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,
});

tl.from(".centerPart1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
});

tl.from(".centerPart1 button",{
    opacity:0,
    duration:0.9,
    ease:"back.out(2)"
});

tl.from(".centerPart2 img",{
    opacity:0,
    duration:0.9,
},"-=1"); 

// U can add delay in timeline : "-=1" means it starts animation 1 sec early.
// when u want to animate some element at the same time the add "anyWord" in each element.

gsap.from(".section1Bottom img",{
    y:200,
    opacity:0,
    duration:0.8,
    stagger:0.15,
    scrollTrigger:{
        trigger:".section1Bottom img",
        scroller:"body",
        // markers:true,
        start:"top 98%"
    }   
});

gsap.from(".services",{
    x:-50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    }
});

gsap.from(".elem.elem1",{
    x:-300,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".elem.elem1",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 90%",
        end:"top 50%",
    }
});

gsap.from(".elem.elem2",{
    x:300,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".elem.elem2",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 90%",
        end:"top 50%",
    }
},);

gsap.from(".elem.elem3",{
    x:-300,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".elem.elem3",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 90%",
        end:"top 50%",
    }
},);

gsap.from(".elem.elem4",{
    x:300,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".elem.elem4",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 90%",
        end:"top 50%",
    }
});