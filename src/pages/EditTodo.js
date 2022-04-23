import React from 'react'
import { ThemeWebsite } from 'theme/website'
import { EditTask } from "components"

export const EditTodoPage = () => {
  return (
    <ThemeWebsite title="Edit Todo">
      <EditTask />
    </ThemeWebsite>
  )
}