import { TodoApi } from 'api'
import { Loader } from 'shared/interface'
import { ThemeWebsite } from "theme/website"
import { ListTask } from "components"
import { useEffect, useState } from 'react'

export const ListTodoPage = () => {

  const [isLoading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTimeout(() => {
      TodoApi.getAll()
        .then(
          (r) => {
            setLoading(false)
            setTodos(r.data)
          }
        )
    }, 2000)

  }, [])

  return (
    <ThemeWebsite titlePage="List Tasks">
      {
        isLoading ? <Loader /> : <ListTask list={todos} />
      }
    </ThemeWebsite>
  )
}