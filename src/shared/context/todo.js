import React, { useReducer } from "react"

//intialState
const intialState = {
    list: [],
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

//reducer 
const todoReducer = (prevState = intialState, { payload, type }) => {

    switch (type) {

        case TodoTypes.REQ_PENDING: {
            return {
                ...prevState,
                loading: true
            }
        }

        case TodoTypes.ADD: {
            return {
                list: [...prevState.list, payload.todo],
                loading: false,
                msg: { content: payload.message, error: false }
            }
        }

        case TodoTypes.EDIT: {
            return {
                list: [...prevState.list.map(t => t.id === payload.todo.id ? { ...payload.todo } : t)],
                loading: false,
                msg: { content: payload.message, error: false }
            }
        }

        case TodoTypes.DEL: {
            return {
                list: [...prevState.list.filter(t => t.id !== payload.todoId)],
                loading: false,
                msg: { content: payload.message, error: false }
            }
        }

        case TodoTypes.REQ_FAILD: {
            return {
                ...prevState,
                loading: false,
                msg: { content: payload.message, error: true }
            }
        }

        case TodoTypes.FETCH_ALL: {
            return {
                list: [...payload.todos],
                loading: false,
                msg: { content: payload.message, error: false }
            }
        }


    }
}


//create context 
export const TodoContext = React.createContext()

export const TodoProvider = ({ children }) => {

    const [todoState, dispatch] = useReducer(todoReducer, intialState)

    return (
        <TodoContext.Provider value={{ todoState, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}


