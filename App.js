import React, { useState } from 'react';
import './App.css';

const App = ()=>{
  const[count, setCount] = useState(0);

  const inc = () =>{
    setCount(count+1);
  }
  const dec = () =>{
    if (count > 0){
      setCount(count-1);
    }
    else{
      setCount(0);
      alert("set limit 0");
    }
  }

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{count}</h1>
          <div className='btn_div'>
            <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App;
