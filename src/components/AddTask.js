import React from 'react'
import { FormUI } from "shared"

export const AddTask = ({ msg, loader, onSubmit }) => {
  return (
    <FormUI
      actionName='save'
      onSubmit={onSubmit}
      isLoading={loader}
      message={msg}
    />
  )
}