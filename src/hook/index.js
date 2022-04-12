import { useState } from 'react'
import { MessageModel, TaskModel, TypeMessage } from 'model'
import { TodoApi } from "api"

const UseAddTodo = () => {

    const [isLoading, setLoading] = useState(false)
    const [msg, setMsg] = useState(new MessageModel())

    const handleSubmit = ({ title, description, status }) => {
        setLoading(true)
        setTimeout(() => {
            TodoApi.post(new TaskModel(null, title, description, status))
                .then(
                    (r) => {
                        setMsg(new MessageModel(`Task ${r.data.id} added successfully 😎 !`, TypeMessage.SUCCESS))
                    }
                ).catch(
                    (r) => {
                        setMsg(new MessageModel("Something is wrong 🙄!"))
                    }
                ).finally(_ => setLoading(false))
        }, 2000)

    }
    return { isLoading, msg, handleSubmit }
}

export const useHook = {
    addTodo: UseAddTodo
}