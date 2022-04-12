import { ThemeWebsite } from 'theme/website'
import { FormUI } from "shared"
import { useHook } from "hook"

export const AddTodoPage = () => {

  const { msg, isLoading, handleSubmit } = useHook.addTodo()

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

