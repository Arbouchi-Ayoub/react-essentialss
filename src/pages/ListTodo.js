import { TodoApi } from 'api'
import { ListTask } from 'components'
import { UseHook } from 'hook'
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