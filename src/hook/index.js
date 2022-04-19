import { useReducer, useState } from "react"
import { TodoApi } from "api"
import { TaskModel, ActionModel } from "model"

// types 
export const Types = {
    REQ_SUCCESS: "success",
    REQ_ERROR: "erreur",
    REQ_PENDING: "pending"
}

// actions 
const pending = _ => ActionModel.create(Types.REQ_PENDING)
const errorReq = (payload) => ActionModel.create(Types.REQ_ERROR, payload)
const successReq = (payload) => ActionModel.create(Types.REQ_SUCCESS, payload)


//reducer 
const requestReducer = (prevState, { type, payload }) => {

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

//helpers
const runAfter = (func, delay = 2000) => {
    setTimeout(() => func(), delay)
}

const ActionHook = (action = "save") => {

    let actionFunc;

    switch (action) {
        case "save":
            actionFunc = (input) => TodoApi.post(new TaskModel(null, input.title, input.description, input.status))
            break;
        case "edit":
            actionFunc = (input) => TodoApi.put(new TaskModel(input.id, input.title, input.description, input.status))
            break
    }

    const [state, dispatch] =
        useReducer(
            requestReducer,
            {
                isLoading: false, msg: { content: "", error: false }
            }
        )


    const handleSubmit = (inputs) => {

        dispatch(pending())
        runAfter(

            async () => {
                try {
                    let r = await actionFunc(inputs)
                    dispatch(successReq(`Task ${r.data.id} ${action === "save" ? "added" : "updated"} successfully 😎 !`))
                } catch (error) {
                    dispatch(errorReq(`Something is wrong 😢!`))
                }
            }
        )


    }

    return { ...state, handleSubmit }
}

export const UseHook = {

    saveTodo: ActionHook,
    editTodo: () => ActionHook("edit")
} 