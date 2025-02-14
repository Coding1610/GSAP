const textReveal = () => {

    document.querySelectorAll(".reveal")

    .forEach((elem)=>{

        let spanChild = document.createElement("span");
        let spanParent = document.createElement("span");

        spanChild.classList.add("child");
        spanParent.classList.add("parent");

        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);

        elem.innerHTML = "";
        elem.appendChild(spanParent);

    });

}

textReveal();

var tl = gsap.timeline();

// tl.pause();

tl.from(".parent .child span",{
    x:200,
    duration:1,
    opacity:0,
    ease:"power3",
    stagger:0.12,
});

tl.to(".reveal .parent .child",{
    y:"-101%",
    duration:0.8,
    delay:-0.5,
    ease:Expo.easeInOut
});

tl.to(".black",{
    height:0,
    duration:1,
    ease:Expo.easeInOut
});

tl.to(".blue",{
    height:"100%",
    top:0,
    duration:2,
    delay:-1.9,
    ease:Expo.easeInOut
});

tl.to(".white",{
    height:"100%",
    top:0,
    duration:1,
    delay:-1.2,
    ease:Expo.easeInOut
});

tl.to(".white, .blue",{
    height:0,
})