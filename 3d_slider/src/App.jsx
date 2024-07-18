import React, { CSSProperties } from "react";
import { dragons } from "./constants";



const App = () => {
  return (
    <div className="h-[100vh]">
      {/* Banner */}
      <div className="relative w-full h-screen text-center overflow-hidden" >
        {/* Slider */}
        <div className="w-[200px] h-[250px] absolute top-[10%] left-[calc(50%-100px)] [transform-style:preserve-3d] [transform:perspective(1000px)] animate-autoRun z-[2]" style={{"--quantity": dragons.length}}>
          {dragons.map((dragon, index) => (
            // Item
            <div className="absolute inset-[0_0_0_0] [transform:rotateY(calc((var(--position)-1)*(360/var(--quantity))*1deg))_translateZ(550px)]" style={{"--position": index+1}} key={index}>
              <img className="w-full h-full object-cover rounded-md" src={dragon} alt="" />
            </div>
          ))}
        </div>
        {/* Content */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(1400px,100vw)] h-fit pb-24 flex flex-wrap justify-between items-center z-[1]">
          <h1 data-content="CSS ONLY" className="relative font-rubik text-[12em] font-bold leading-[1em] text-[#252838] after:absolute after:inset-0 after:content-[attr(data-content)] after:z-[2] after:[color:var(--c2)] after:[-webkit-text-fill-color:transparent] after:[-webkit-text-stroke-width:2px]">
            CSS ONLY
          </h1>
          {/* Auther */}
          <div className="font-poppins text-right max-w-[300px]">
            <h2 className="text-[3em] font-semibold">
              rasan3.1416
            </h2>
            <span className="text-[1em] font-semibold mb-4">
              Web Developer
            </span>
            <p>
              Try viewing my github for more projects previews.
            </p>
          </div>
          {/* Model */}
          <div className="absolute left-0 bottom-0 w-full h-[75vh] bg-model bg-no-repeat bg-[top_center] bg-[auto_130%] z-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default App;