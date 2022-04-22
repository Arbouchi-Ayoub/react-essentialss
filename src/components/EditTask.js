import { FormUI } from "shared"
import { UseHook } from "hook"
import { ActionsNames } from "shared/layouts/CONSTANT"


export const EditTask = () => {

  
  
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
