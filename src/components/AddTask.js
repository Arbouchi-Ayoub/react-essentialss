import { FormUI } from "shared"
import { UseHook } from "shared/hook"
import { ActionsNames } from "shared/layouts/CONSTANT"

export const AddTask = () => {

  const { handleSubmit, msg, loading } = UseHook.SaveTodo()

  return (
    <FormUI
      actionName={ActionsNames.SAVE}
      onSubmit={handleSubmit}
      isLoading={loading}
      msg={msg}
    />
  )
}
