import { TaskModel } from "model"
import { useState } from "react"
import { FormUI } from "shared"
import { client } from "tools/axios"

export const AddTask = () => {

  const [isLoading, setLoading] = useState(false)
  const [msg, setMsg] = useState({ content: "", error: false })

  const handleSubmit = (inputs, resetForm) => {

    const { title, description, status } = inputs

    setLoading(true)
    setTimeout(() => {
      client.post(
        "/todos",
        new TaskModel(null, title, description, status)
      ).then(
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

  return (

    <FormUI
      actionName='save'
      onSubmit={handleSubmit}
      isLoading={isLoading}
      msg={msg}
    />
  )
}
