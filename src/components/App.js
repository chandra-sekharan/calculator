import React from 'react';
import Calculator from './calculator';


function App() {
  return (
    <div className="w-100 h-screen flex flex-col border-2 border-black justify-center items-center">
      <h1 className='text-3xl'><b>Calculator</b></h1><br></br>
      <Calculator/><br></br>
      <span className='text-lg'><b>copyrights &copy;<i className='text-red-500'>chandra shekar</i></b></span>
    </div>
  );
}

export default App;
