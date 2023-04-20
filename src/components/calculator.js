import React, { useState } from "react";


const Calculator = ()=>{
 
  const [input , setinput] = useState([]);
  
     
     const Evalute =()=>{
      try {
      const value = eval(input);
      setinput(new String(value))
       } catch (e) {
       if (e instanceof SyntaxError) {
        alert(e.message);
        }
      }
     }

     const clear =()=>{
       
         setinput('');
     }

     const clearItem =()=>{
    
        const data = input.slice(0,-1)

         setinput(data)
        
     }
  
    return(
      <>
       <div className="w-92 h-3/4 md:w-64 sm:w-64  space-y-4 bg-[#3C486B] rounded">
        <div className="w-11/12 h-1/5 p-5  ml-2.5 mt-2.5 bg-[#F0F0F0] rounded">
          {input}
        </div>
        <div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-5">
        <button onClick={clear} className="w-10 h-10 rounded bg-[#F0F0F0]">AC</button>
        <button onClick={clearItem} className="w-10 h-10  rounded bg-[#F0F0F0]">clr</button>
        <button onClick={()=>setinput(input + '%')} className="w-10 h-10  rounded bg-[#F0F0F0]">%</button>
        <button onClick={()=>setinput(input + '/')} className="w-10 h-10  rounded bg-[#F0F0F0]">/</button>
        <button onClick={()=>setinput(input + '7')} className="w-10 h-10  rounded bg-[#F0F0F0]">7</button>
        <button onClick={()=>setinput(input + '8')} className="w-10 h-10  rounded bg-[#F0F0F0]">8</button>
        <button onClick={()=>setinput(input + '9')} className="w-10 h-10  rounded bg-[#F0F0F0]">9</button>
        <button onClick={()=>setinput(input + '*')} className="w-10 h-10  rounded bg-[#F0F0F0]">x</button>
        <button onClick={()=>setinput(input + '4')} className="w-10 h-10  rounded bg-[#F0F0F0]">4</button>
        <button onClick={()=>setinput(input + '5')} className="w-10 h-10  rounded bg-[#F0F0F0]">5</button>
        <button onClick={()=>setinput(input + '6')} className="w-10 h-10  rounded bg-[#F0F0F0]">6</button>
        <button onClick={()=>setinput(input + '-')} className="w-10 h-10  rounded bg-[#F0F0F0]">-</button>
        <button onClick={()=>setinput(input + '1')} className="w-10 h-10  rounded bg-[#F0F0F0]">1</button>
        <button onClick={()=>setinput(input + '2')} className="w-10 h-10  rounded bg-[#F0F0F0]">2</button>
        <button onClick={()=>setinput(input + '3')} className="w-10 h-10  rounded bg-[#F0F0F0]">3</button>
        <button onClick={()=>setinput(input + '+')} className="w-10 h-10  rounded bg-[#F0F0F0]">+</button>
        <button onClick={()=>setinput(input + '00')} className="w-10 h-10  rounded bg-[#F0F0F0]">00</button>
        <button onClick={()=>setinput(input + '0')} className="w-10 h-10  rounded bg-[#F0F0F0]">0</button>
        <button onClick={()=>setinput(input + '.')} className="w-10 h-10  rounded bg-[#F0F0F0]">.</button>
        <button onClick={Evalute} className="w-10 h-10 rounded bg-[#F0F0F0]">=</button>
        </div>
        </div>
       </div>
       
       </>
    );
}

export default Calculator