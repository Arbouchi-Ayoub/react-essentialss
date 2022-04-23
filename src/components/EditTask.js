import { FormUI } from "shared"
import { UseHook } from "hook"
import { ActionsNames } from "shared/layouts/CONSTANT"
import { TodoApi } from "api"
import { useParams } from "react-router-dom"
import { useEffect } from "react"


export const EditTask = () => {

  const {todoId} = useParams()

  useEffect( async () => {
    let todo = await TodoApi.get(todoId)
    console.log(todo)  
  }, [])
  
  
  const { msg, isLoading, handleSubmit } = UseHook.editTask()
  
  return (

    <FormUI
      actionName={ActionsNames.EDIT}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      msg={msg}
    />
  )
}
