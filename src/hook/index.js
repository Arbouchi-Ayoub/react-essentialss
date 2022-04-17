import { useReducer, useState } from "react"
import { TodoApi } from "api"
import { TaskModel } from "model"

//types 
export const Types = {
    REQ_SUCCESS: "success",
    REQ_ERROR: "erreur",
    REQ_PENDING: "pending"
}

//reducer 
const todoReducer = (prevState, { type, payload }) => {

    switch (type) {

        case Types.REQ_SUCCESS: {
            return {
                isLoading: false,
                msg: { ...prevState.msg, content: payload }
            }
        }
        case Types.REQ_ERROR: {
            return {
                isLoading: false,
                msg: { content: payload, error: true }
            }
        }
        case Types.REQ_PENDING: return {
            isLoading: true,
            msg: {
                ...prevState.msg
            }
        }
    }
}




export const UseHook = {

    AddTodo: () => {

        const [isLoading, setLoading] = useState(false)
        const [msg, setMsg] = useState({ content: "", error: false })

        const handleSubmit = (inputs, resetForm) => {

            const { title, description, status } = inputs

            setLoading(true)
            setTimeout(() => {
                TodoApi.post(new TaskModel(null, title, description, status)).then(
                    (r) => {
                        resetForm(true)
                        setMsg({ ...msg, content: `Task ${r.data.id} added successfully 😎 !` })
                    }
                ).catch(
                    (e) => {
                        console.log(e)
                        setMsg({ content: `Something is wrong  !`, error: true })
                    }
                ).finally(() => {
                    setLoading(false)
                })
            }, 2000)

        }

        return { isLoading, msg, handleSubmit }
    },
    EditTodo: () => {

        const [state, dispatch] =
            useReducer(
                todoReducer,
                {
                    isLoading: false, msg: { content: "", error: false }
                })


        const handleSubmit = (inputs, resetForm) => {

            const { title, description, status } = inputs

            setLoading(true)

            setTimeout(() => {
                TodoApi.post(new TaskModel(null, title, description, status)).then(
                    (r) => {
                        resetForm(true)
                        dispatch({ type: Types.REQ_SUCCESS, payload: `Task ${r.data.id} updated successfully 😎 !` })
                    }
                ).catch(
                    (e) => {
                        dispatch({ type: Types.REQ_ERROR, payload: `Something is wrong !` })
                    }
                )
            }, 2000)

        }

        return { ...state, handleSubmit }
    }

} 