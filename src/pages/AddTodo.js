import { ThemeWebsite } from "theme/website"
import { useHook } from "hook"
import { AddTask } from "components"

export const AddTodoPage = () => {

  const { msg, isLoading, handleSubmit } = useHook.addTodo()

  return (

    <ThemeWebsite titlePage="Add Task" >

      <AddTask msg={msg} loader={isLoading} onSubmit={handleSubmit} />

    </ThemeWebsite>
  )
}

