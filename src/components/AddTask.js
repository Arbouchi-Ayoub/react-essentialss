import { FormUI } from "shared"
import { UseHook } from "hook"
import { ActionsNames } from "shared/layouts/CONSTANT"

export const AddTask = () => {

  const { msg, isLoading, handleSubmit } = UseHook.saveTodo()

  return (

    <FormUI
      actionName={ActionsNames.SAVE}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      msg={msg}
    />
  )
}
