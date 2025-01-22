import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 5

  const addValue = () => {
    console.log("clicked", counter)
    counter = counter + 1
  }

  return (
    <>
    <h1>Himanshu || HS</h1>
    <h2> Counter Value: {counter}</h2>

    <button onClick={addValue}
    >Add Value{counter}</button>
    <br />
    <button>Subtract Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
