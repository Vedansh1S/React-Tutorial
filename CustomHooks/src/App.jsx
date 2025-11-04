import { useState } from 'react'

const useCounter = (initialvalue) => {
  const [count, setCount] = useState(initialvalue);

  function increment(){setCount(count => count + 1)}
  function decrement(){setCount(count => count - 1)}
  function reset(){setCount(initialvalue)}

  return {count, increment, decrement, reset}
}

function App() {
  const {count, increment, decrement, reset}= useCounter(0);

  return (
    <>
      {count}<br/>
      <button onClick={increment}> Add</button> <br/>
      <button onClick={decrement}> Subtract</button> <br/>
      <button onClick={reset}> Reset</button><br/>
    </>
  )
}

export default App
