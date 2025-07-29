import { useState } from 'react'
import { Todoprovider } from './context/TodoContext'
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

function App() {

  // todo functionalities 
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(
      (prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map(
      (prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    )
  }

  // local storage

  useEffect(() => {
    try {
      const todos = JSON.parse(
        localStorage.getItem("todos")
      )
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error)
    }
  }, [])

  useEffect(() => {
    // Always save to localStorage, including empty array
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {/*Loop and Add TodoItem here */}

            {todos.map(
              (todo) => (
                <div
                  className='w-full'
                  key={todo.id} >

                  <TodoItem
                    todo={todo}
                  />

                </div>
              )
            )}

          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
