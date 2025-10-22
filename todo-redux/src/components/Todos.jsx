import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"


const Todos = () => {
    const todos = useSelector(state => state.Todos)
    const dispatch = useDispatch()

  return (
    <>
    <div className="">
        <ul
        className="list-none"
        >
        {todos.map((todo) => (
            <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
                <div className="text-white">
                    {todo.text}
                </div>
                <button
                onClick={() => useDispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-500 rounded text-2xl"
                >
                    X
                </button>
            </li>
        ))}
        </ul>
    </div>
    </>
  )
}

export default Todos