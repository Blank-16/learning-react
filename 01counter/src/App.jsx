import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  //  let counter = 0;
  const addValue = ()=> {
    // counter = counter + 1; 
    // setCounter(counter); 
    setCounter(counter + 1);
    if(counter >= 20){
      setCounter(20);
    }
  }

  const removeValue = () => {
    setCounter(counter-1);
    if(counter <= 0){
      setCounter(0);
    }
  }

  return (
    <>
    <h1>Counter 101</h1> 
    <h2>Counter Value: {counter}</h2>
    
    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button 
    onClick={removeValue}
    >Subtract value</button>

   </>
  )
}
    

export default App
