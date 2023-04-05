import React from 'react'
import { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);
    
    const Increasehandler = () => {
        setCount(count + 1);
        console.log("Button clicked"); 
    }
    // const Counthandler = () => {
    //     count++;
    //     console.log("Button clicked");
    // }
    const Decreasehandler = () => {
        setCount(count - 1);
        console.log("Button clicked");
    }

  return (
    <div className='button'>
        <button type="button" onClick={Increasehandler}>+</button>
        <button type="button" onClick={Decreasehandler}>-</button>
        <p>{count}</p>
    </div>
  )
}

export default Button;