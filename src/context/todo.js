import React, { useEffect, useReducer } from 'react'

export const TodoContext = React.createContext()


//initial state
const initialState = {
    todos: [],
    loading: false,
    msg: { content: "", error: false }
}

//types 
export const TodoTypes = {
    ADD: "ADD",
    EDIT: "EDIT",
    DEL: "DEL",
    REQ_PENDING: "REQ_PENDING",
    REQ_FAILD: "REQ_FAILD",
    FETCH_ALL: "FETCH_ALL"
}


// todo reducer
export const todoReducer = (prevState = initialState, { type, payload }) => {

    switch (type) {

        case TodoTypes.REQ_PENDING: {
            return { ...prevState, loading: true }
        }

        case TodoTypes.REQ_FAILD: {
            return {
                ...prevState, loading: false, msg: { content: payload.msg, error: true }
            }
        }

        case TodoTypes.ADD: {
            return {
                todos: [
                    ...prevState.todos,
                    payload.todo
                ],
                loading: false,
                msg: { ...prevState.msg, content: payload.msg }
            }
        }

        case TodoTypes.EDIT: {
            return {
                todos: prevState.todos.map(t => t.id === payload.todo.id ? { ...payload.todo } : t),
                loading: false,
                msg: { ...prevState.msg, content: payload.msg }
            }
        }

        case TodoTypes.DEL: {
            return {
                todos: [
                    ...prevState.todos.filter(t => t.id !== payload.todoId)
                ],
                loading: false,
                msg: { ...prevState.msg, content: payload.msg }
            }
        }

        case TodoTypes.FETCH_ALL: {
            return {
                ...prevState,
                todos: [...payload.list]
            }
        }

    }
}



export const TodoProvider = ({ children }) => {

    const [todo, dispatch] = useReducer(todoReducer, initialState)

    useEffect(() => {
        console.log(todo)
    }, [todo])


    return (
        <TodoContext.Provider value={{ todo, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}