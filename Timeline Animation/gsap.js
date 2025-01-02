var tl = gsap.timeline();

// when u use timeline , it automatic trigger when page load
// But you can control using with tl.pause() and tl.play() or var tl = gsap.timeline({paused:true}); 

var menu = document.querySelector("#nav i");

var close = document.querySelector("#full i");

tl.to("#full",{
    right:0,
    duration:0.6,
});

tl.from("#full h4",{
    x:500,
    duration:0.9,
    stagger:0.3,
    opacity:0,
    ease: "back.out(1.4)"
});

tl.from("#full i",{
    opacity:0,
    y:-50
});

tl.pause();

menu.addEventListener("click",function(){
    tl.play();
});

close.addEventListener("click",function(){
    tl.reverse();
});