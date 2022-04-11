import React, { useState } from 'react'
import { ThemeWebsite } from 'theme/website'
import { FormUI } from "shared"
import { client } from 'tools/axios'
import { TaskModel } from 'model'

export const AddTodoPage = () => {

  const [isLoading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")

  const handleSubmit = ({ title, description, status }) => {
    setLoading(true)
    setTimeout(() => {
      client.post(
        "/todos",
        new TaskModel(null, title, description, status)
      ).then(
        (r) => {
          setLoading(false)
          setMsg(`Task ${r.data.id} added successfully 😎 !`)
        }
      )
    }, 2000)

  }


  return (

    <ThemeWebsite titlePage="Add Task" >

      <FormUI 
        actionName='save' 
        onSubmit={handleSubmit} 
        isLoading={isLoading} 
        message={msg} 
      />

    </ThemeWebsite>
  )
}

