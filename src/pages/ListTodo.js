import { ListTask } from 'components'
import { TodoContext } from 'shared/context/todo'
import { UseHook } from 'shared/hook'
import { useContext } from 'react'
import { Loader } from 'shared/interface'
import { ThemeWebsite } from "theme/website"

export const ListTodoPage = () => {

  const { loading, todos } = UseHook.FetchTodos()

  return (
    <ThemeWebsite titlePage="List Task">
      {loading ? <Loader /> : <ListTask list={todos} />}
    </ThemeWebsite>
  )
}