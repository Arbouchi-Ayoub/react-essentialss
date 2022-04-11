import React from 'react'
import { ThemeWebsite } from 'theme/website'
import { FormUI } from "shared/interface"

export const AddTodoPage = () => {

  const handleSubmit = (inputValues) => {
    console.log(inputValues)

  }


  return (

    <ThemeWebsite titlePage="Add Task" >

      <FormUI actionName='save' onSubmit={handleSubmit} />

    </ThemeWebsite>
  )
}

