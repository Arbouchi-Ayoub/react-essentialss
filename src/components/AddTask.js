import { FormUI } from "shared"
import { UseHook } from "hook"
import { ActionsNames } from "shared/layouts/CONSTANT"

export const AddTask = () => {

  const { todo, handleSubmit } = UseHook.SaveTodo()

  return (

    <FormUI
      actionName={ActionsNames.SAVE}
      onSubmit={handleSubmit}
      isLoading={todo.loading}
      msg={todo.msg}
    />
  )
}
