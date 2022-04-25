import { TodoApi } from "api"
import { TodoContext, TodoTypes } from "shared/context/todo"
import { runAfter } from "shared/helpers"
import { TaskModel } from "model"
import { useContext } from "react"
import { useParams } from "react-router-dom"

//--------------ADD TODO-----------
const SaveTodo = () => {

    const { dispatch, todoState: { loading, msg } } = useContext(TodoContext)

    const handleSubmit = (inputsData) => {
        const { title, description, status } = inputsData
        //mark request as pended 
        dispatch({ type: TodoTypes.REQ_PENDING })
        //add post to the server 
        runAfter(
            () => {
                TodoApi.post(new TaskModel(null, title, description, status))
                    .then((r) => {
                        dispatch({ type: TodoTypes.ADD, payload: { todo: r.data, message: "todo added successfuly !" } })
                    })
                    .catch((e) => {
                        dispatch({ type: TodoTypes.REQ_FAILD, payload: { message: "Something goes wrong !" } })
                    })
            }
        )
    }

    return { handleSubmit, loading, msg }
}
//--------------DELETE TODO-----------
// let setDeleteLoader = Function

const DeleteTodo = () => {

    const { dispatch, todoState: { loading, msg } } = useContext(TodoContext)

    const onDeleteTask = (todoId, setLoading) => {
        // setDeleteLoader = setLoading
        // mark request as pended
        dispatch({ type: TodoTypes.REQ_PENDING })
        // delete post from the server
        runAfter(() => {
            TodoApi.delete(todoId)
                .then((r) => {
                    dispatch({ type: TodoTypes.DELETE, payload: { todoId, message: "todo deleted successfuly !" } })
                })
                .catch((e) => {
                    dispatch({ type: TodoTypes.REQ_FAILD, payload: { message: "Something goes wrong !" } })
                })
        })
    }
    return { onDeleteTask, loading, msg }

}

//----------------FETCH TODOS------
const FetchTodos = () => {

    const { dispatch, todoState: { loading, msg } } = useContext(TodoContext)

    const onFetchTodos = () => {
        // mark request as pended
        dispatch({ type: TodoTypes.REQ_PENDING })
        // fetch posts from the server
        runAfter(() => {
            TodoApi.getAll()
                .then((r) => {
                    dispatch({ type: TodoTypes.FETCH_ALL, payload: { todos: r.data, message: "todos fetched successfuly !" } })
                }
                )
                .catch((e) => {
                    dispatch({ type: TodoTypes.REQ_FAILD, payload: { message: "Something goes wrong !" } })
                })
        })
    }
    return { onFetchTodos, loading, msg }

}
//----------------EDIT TODO--------

const EditTodo = () => {

    const { todoId } = useParams()

    const handleSubmit = (inputsData) => {
        const { title, description, status } = inputsData

    }

}



export const UseHook = {
    SaveTodo,
    DeleteTodo,
    FetchTodos,
    EditTodo
} 