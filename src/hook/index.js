import { useContext, useEffect } from "react"
import { TodoApi } from "api"
import { TodoContext, TodoTypes } from "context/todo"
import { runAfter } from "helpers"
import { TaskModel } from "model"

//--------------ADD TODO-----------
const SaveTodo = () => {

    const { dispatch, todo } = useContext(TodoContext)

    const handleSubmit = (inputsData) => {
        const { title, description, status } = inputsData
        dispatch({ type: TodoTypes.REQ_PENDING })
        runAfter(
            async () => {
                try {
                    const r = await TodoApi.post(new TaskModel(null, title, description, status))
                    dispatch({ type: TodoTypes.ADD, payload: { todo: r.data, msg: "todo saved successfully 😅" } })
                } catch (error) {
                    dispatch({ type: TodoTypes.REQ_FAILD, payload: "something goes wrong 😅" })
                }
            }
        )
    }

    return { todo, handleSubmit }
}
//--------------DELETE TODO-----------
let setDeleteLoader = Function

const DeleteTodo = () => {

    const { dispatch, todo } = useContext(TodoContext)
    const onDeleteTask = (todoId, setLoading) => {
        setDeleteLoader = setLoading
        dispatch({ type: TodoTypes.REQ_PENDING })
        runAfter(
            async () => {
                try {
                    await TodoApi.delete(todoId)
                    dispatch({ type: TodoTypes.DEL, payload: { todoId, msg: " deleted successfuly" } })
                } catch (error) {
                    dispatch({ type: TodoTypes.REQ_FAILD, payload: { msg: "Someting goes wrong 😅" } })
                }
            }
        )
    }

    useEffect(() => {
        setDeleteLoader(todo.loading)
    }, [todo.loading])

    return { onDeleteTask }
}

//----------------FETCH TODOS------
const FetchTodos = () => {

    const { dispatch, todo: { todos, loading } } = useContext()

    useEffect(() => {
        dispatch({ type: TodoTypes.REQ_PENDING })
        runAfter(async () => {
            try {
                let r = await TodoApi.getAll()
                dispatch({ type: TodoTypes.FETCH_ALL, payload: { list: r.data } })
            } catch (error) {
                dispatch({ type: TodoTypes.REQ_FAILD, payload: { msg: "Something goes wrong 😅" } })
            }
        })
    }, [])

    return {
        todos, loading
    }
}
//----------------EDIT TODO--------





export const UseHook = {
    SaveTodo,
    DeleteTodo,
    FetchTodos
} 