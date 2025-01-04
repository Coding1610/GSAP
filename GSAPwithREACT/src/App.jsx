import React, { useRef } from 'react'
import './App.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useState } from 'react'

export default function App() {

    const gsapRef = useRef();

    useGSAP(() => {
      gsap.from(".box",{
        x:-500,
        y:-700,
        opacity:0,
        duration:1.5,
        delay:1,
        yoyo:true,
        // repeat:-1,
      });
    });

    // Rather than mention class and id name for element u can give reference of that also

    useGSAP(() => {
      gsap.from(gsapRef.current,{
        rotate:90,
        opacity:0,
        duration:3,
        delay:1,
        // repeat:-1,
      });
    });

    var containerRef = useRef();

    useGSAP(() => {
      gsap.from(".box2",{
        rotate:360,
        opacity:0,
        duration:1,
        scale:0,
        delay:1,
      });
    },{scope:containerRef});

    // GSAP utils : random(s,e,d)
    const box2Ref = useRef();
    const [valX,setValX] = useState(0);
    const [roti,setRoti] = useState(0);
    const randomX = gsap.utils.random(0,2500,50);
    const randomRoti = gsap.utils.random(-360,360,10);

    useGSAP(() => {
      gsap.to(box2Ref.current,{
        x:valX,
        rotate:roti,
        duration:1,
      })
    },[valX,roti]); // U can also write it like , scrope:{"scopeName",dependencies:[]};

    // U can also use it like
    // const functionName = function(){
    //   gsap.to("",{});
    // }

    // ContextSafe

    // You can use gsap in react like above but there is one problem,
    // Whenever u use like above it affect the memory and load on website, means animation is done then their code is always remains there in memory.
    // We want, if we use animation - code alive and if not then code dead.

    // for this we have Context safe

    var miniBoxRef = useRef();

    const {contextSafe} = useGSAP();

    // Bad Practice
    // const clickHandle = () => {
    //   gsap.from(miniBoxRef.current,{
    //     x:2800,
    //     opacity:0,
    //     delay:1,
    //     duration:1,
    //   });
    // };

    // Good Practice
    const clickHandle = contextSafe( () => {
      gsap.from(miniBoxRef.current,{
            x:1000,
            opacity:0,
            delay:1,
            duration:1,
          });
    });

  return (
    <>
    <div className='box'> 
      <h1 ref={gsapRef}>Animate Anything</h1> {/* U can add ref={gsapRef}  */}
    </div>

    <div ref={containerRef} className='container'>
      <div className="box2">1</div>
    </div>

    <div className="mainContainer">
      <div onClick={()=>{setValX(randomX),setRoti(randomRoti)}} ref={box2Ref} className="box2">2</div>
    </div>

    <div onClick={clickHandle} ref={miniBoxRef} className='miniBox'>Context Safe</div>
    </>

  )
}