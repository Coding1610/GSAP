function call(){
    
    var h1 =  document.querySelector("h1");
    
    var h1Text = h1.textContent;
    // console.log(h1Text);

    var textLength = h1Text.length;
    // console.log(textLength);

    var halfLegnth = textLength/2;

    var splitedText = h1Text.split("");
    // console.log(splitedText);

    var clutter = "";

    splitedText.forEach((e,i) => {
        // console.log(i);
        if( i < halfLegnth ){
            clutter += `<span class="a">${e}</span>`; 
        }
        else{
            clutter += `<span class="b">${e}</span>`;
        }
    });

    h1.innerHTML = clutter;

}

call();

// stagger : positive then left to right or top to bottom
// stagger : negative then right to left or bottom to top

gsap.from("h1 .a",{
    y:90,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
    ease:"back.out(3)"
});

gsap.from("h1 .b",{
    y:90,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15,
    ease:"back.out(3)"
});