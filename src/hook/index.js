import { TodoApi } from "api"
import { TodoContext, TodoTypes } from "context/todo"
import { runAfter } from "helpers"
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
let setDeleteLoader = Function

const DeleteTodo = () => {

    const onDeleteTask = (todoId, setLoading) => {
        setDeleteLoader = setLoading

    }

}

//----------------FETCH TODOS------
const FetchTodos = () => {


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