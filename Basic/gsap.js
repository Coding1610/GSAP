// You can apply css property here

// yoyo : value of yoyo is boolean and it is use for, go -> return -> go -> return ...
// stagger : It is use for animate element one by one with same property.
// timeline : It is use for animate eleemnt one by one with different property.

gsap.to("#box1",{
    x:1050,
    duration:3,
    delay:1,
    rotate:220,
    // backgroundColor:"white",
    // borderRadius:"50%",
    scale:2,
    // repeat:1, // Means animation happen 2 time
    repeat:-1, // repeat infinite
    yoyo:true, 
}) 

gsap.from("#box2",{
    x:1000,
    duration:3,
    delay:1,
    rotate:220,
    // repeat:-1,
    // backgroundColor:"white",
})

gsap.from("h2",{
    opacity:0,
    duration:1,
    y:30,
    delay:3,
    stagger:0.3,
})

var tl = gsap.timeline()

tl.from("#navbar h1",{
    y:-30,
    duration:0.5,
    delay:0.5,
    opacity:0
})

tl.from("#navLinks h3",{
    y:-30,
    duration:0.5,
    opacity:0,
    stagger:0.5
})