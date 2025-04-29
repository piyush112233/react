import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0);

  const addValues = (() => {
    counter = counter + 1
    setCounter(counter)
  })
  const removeValues = () => {
    counter = counter - 1
    if (counter >= 0) {
      setCounter(counter)
    }
  }
  return (
    <>
      <div className="card">
        <h1>Chai Aur Code</h1>
        <p>Counter value : {counter}</p>
        <button onClick={addValues}>Add Value </button>
        <button onClick={removeValues}>Remove value</button>
      </div>
    </>
  )
}

export default App
