// scrub : It animate element based on scroll.
//         value is boolean or 1(smooth),2(more smooth),3(..),4(..),5(..).

// pin : It is use when u want animate an element and also pin that element.
//       When u pin element(child) make sure u "trigger:parent".

gsap.from("#page1 #box",{
    // opacity:0,
    duration:3,
    delay:1,
    rotate:-360,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        // markers:true,
        // start:"top 60%",
        // end:"top 50%",
        scrub:2,
    }
})

gsap.from("#page2 #box",{
    // opacity:0,
    duration:3,
    rotate:-160,
    // scrollTrigger:"#page2 #box" Normal
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        // markers:true,
        // start:"top 60%",
        scrub:2,
    }
})

gsap.to("#namePage h1",{
    transform:"translateX(-195%)",
    scrollTrigger:{
        trigger:"#namePage",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 0%",
        end:"top -100%",
        pin:true,
    }
})

gsap.from("#page3 #box",{
    // opacity:0,
    duration:3,
    rotate:-160,
    // scrollTrigger:"#page3 #box" Normal
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        // markers:true,
        // start:"top 60%",
        scrub:2
    }
})