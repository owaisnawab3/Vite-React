import { useEffect, useState } from 'react'
// import Card from './Card'
import './App.css'
import React from 'react'

function App() {

  const [count, setCount] = useState(10);
  const [show, setShow] = useState(false)

  const incrementHandle = () => {
   console.log(count, "first")
   setCount(count + 5)
  }

useEffect(() => {
  incrementHandle();

},[show])


  return (
    <>
      <h1>value {count}</h1>
      <button>increment</button>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <button onClick={()=>{
        setShow(!show)
      }}>Open and Close</button>
      {show &&<div>Modal</div>}
    </>
  )
}

export default App
