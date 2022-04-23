import { TodoApi } from 'api'
import { ListTask } from 'components'
import React, { useEffect, useState } from 'react'
import { Loader } from 'shared/interface'
import { ThemeWebsite } from "theme/website"

export const ListTodoPage = () => {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    let r = await TodoApi.getAll()
    setLoading(false)
    setTodos(r.data)
  }, [])

  return (
    <ThemeWebsite titlePage="List Task">
      {loading ? <Loader /> : <ListTask list={todos} />}
    </ThemeWebsite>
  )
}