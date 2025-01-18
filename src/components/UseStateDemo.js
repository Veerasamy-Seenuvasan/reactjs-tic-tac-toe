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

      }}>Increment</button> {/* Alert with 5, final counter value 5 */}
      <button onClick={()=>{
        setCounter(counter => counter+5);
        setCounter(counter => counter+5,()=>{alert(counter)});
        setCounter(counter => counter+5);
        setCounter(counter => counter+5);

      }}>Increment 2</button> {/* Alert with 5, final counter value 25 */}
    </div>
  )
}
