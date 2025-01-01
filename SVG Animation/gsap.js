// SVG : Scalable Vector Graphics, Container

// var initialPath = `M    10 150    Q           250          150         490      150`;
//               moveTo  x  y  Quadratic Ceenter of x  Center of y  End of x  End of y

var path ="M 10 150 Q 250 150 490 150";
var finalPath = "M 10 150 Q 250 150 490 150";

var string = document.querySelector("svg");

// console.log(string);

// dets : it is object that shows all activity happened when u move mouse over an element

string.addEventListener("mousemove",function(dets){
    const newPath = `M 10 150 Q ${dets.x} ${dets.y} 490 150`;
    // console.log(path);

    gsap.to("path",{
        attr:{d:newPath},
        duration:0.3,
        ease:"power3.out"
    })
});

string.addEventListener("mouseleave",function(){
    gsap.to("path",{
        attr:{d:finalPath},
        duration:1,
        ease: "elastic.out(1,0.2)",
    })
});