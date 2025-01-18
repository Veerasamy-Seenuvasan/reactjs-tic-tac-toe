import React, { useState } from 'react'

export default function UseStateDemo() {
    const [counter,setCounter] = useState(5);
  return (
    <div>
      <span>{counter}</span>
      <button onClick={()=>{
        setCounter(counter+5);
        setCounter(counter+5);
        alert(counter);
        setCounter(counter+5);
        setCounter(counter+5);

      }}>Increment</button>
      <button onClick={()=>{
        setCounter(counter => counter+5);
        setCounter(counter => counter+5);
        alert(counter);
        setCounter(counter => counter+5);
        setCounter(counter => counter+5);

      }}>Increment 2</button>
    </div>
  )
}
