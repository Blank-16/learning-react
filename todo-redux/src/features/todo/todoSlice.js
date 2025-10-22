import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    },
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
                // payload is an object jiske andar jese text lenge 
            }
            state.todos.push(todo)
        },
        // state will give the action to change the initial state 
        // action gives certain values 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

// also need to make the store aware of all the reducers here, as its a restrictive store which only updates the reducers which are stored there

export default todoSlice.reducer
