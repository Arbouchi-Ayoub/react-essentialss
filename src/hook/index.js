import { TaskModel } from "model"
import { useState } from "react"
import { TodoApi } from "api"



export const UseHook = {

    AddTodo: () => {
        const [isLoading, setLoading] = useState(false)
        const [msg, setMsg] = useState({ content: "", error: false })

        const handleSubmit = (inputs) => {
            const { title, description, status } = inputs
            setLoading(true)
            setTimeout(() => {
                TodoApi.post(new TaskModel(null, title, description, status)).then(
                    (r) => {
                        setMsg({ ...msg, content: `Task ${r.data.id} updated successfully 😎 !` })
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
    }
}


