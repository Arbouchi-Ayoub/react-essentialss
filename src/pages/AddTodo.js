import React from 'react'
import { ThemeWebsite } from 'theme/website'
import {FormUI} from "shared/interface"

export const AddTodoPage = () => {
  return (
    <ThemeWebsite titlePage={"Add Task"} >

      <FormUI actionName='save'/>  

    </ThemeWebsite>
  )
}

