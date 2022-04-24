import { useParams } from "react-router-dom"

//--------------ADD TODO-----------
const SaveTodo = () => {


    const handleSubmit = (inputsData) => {
        const { title, description, status } = inputsData

    }

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