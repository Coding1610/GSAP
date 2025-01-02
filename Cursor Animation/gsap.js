var main = document.querySelector("#main");
var image = document.querySelector("#image");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1.5,
        ease: "back.out(2)",
    })
});

image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "Demo";
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"transparent",
        border:"1px solid black",
        scrub:1,
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white",
        border:"none",
        scrub:1,
    })
})