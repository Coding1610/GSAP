// When u scroll event shows one value called deltaY
// It shows the speed of scrolling 
// +ve value means u scroll up
// -ve value means u scroll down

window.addEventListener("wheel",function(e){
    // console.log(e.deltaY);
    if(e.deltaY > 0){
        // console.log("Up Scroll");
        gsap.to("#box",{
            transform:"translateX(-200%)",
            repeat:-1,
            duration: 8,
            ease: "none"
        });

        gsap.to("#box img",{
            rotate:180,
        });
    }
    else{
        // console.log("Down Scroll");
        gsap.to("#box",{
            transform:"translateX(0%)",
            repeat:-1,
            duration: 8,  
            ease: "none"
        });

        gsap.to("#box img",{
            rotate:0,
        });
    }
});