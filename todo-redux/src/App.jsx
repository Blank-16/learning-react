import { useState } from 'react'
import AddTodo from './components/AddTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning About Redux-ToolKit</h1>
      <AddTodo />
    </>
  )
}

export default App
