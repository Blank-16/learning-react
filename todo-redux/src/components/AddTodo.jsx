import { useState } from "react"
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventdefault()
        // dispatch reducer ko use karte store ke andar ke values pe change karta hai 
        // reducer mei action.payload pe sare objects hai use karne ke liye 
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form action=""
            onSubmit={addTodoHandler}
            className="space-x-3 mt-12"
        >
            <input type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-9 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo