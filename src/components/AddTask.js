import { UseHook } from 'hook'
import { FormUI } from 'shared'

export const AddTask = () => {

  const { isLoading, msg, handleSubmit } =  UseHook.AddTodo()

  return (

    <FormUI
      actionName='save'
      onSubmit={handleSubmit}
      isLoading={isLoading}
      msg={msg}
    />
  )
}
