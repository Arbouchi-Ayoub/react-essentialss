import { Input, InputSelect, Button, Loader, Message } from "shared/interface"
import { StatusTodo } from "model"
import { useState } from "react"

//helper
const isEmpty = (data) => {

    for (const p in data) {
        if (data[p] === "") return true
    }
    return false
}

//ayoub
let data = {
    title: "",
    description: "",
    status: StatusTodo.TODO
}

export const FormUI = ({ actionName, isLoading = false, onSubmit, msg }) => {

    const [isDisabled, setDisabled] = useState(true)
    const [reset, setReset] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(data, setReset)
    }

    const handleChangeInput = (input) => {
        //develop by marouane  
        data = { ...data, ...input }
        //check data 
        setDisabled(isEmpty(data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                onChangeVal={handleChangeInput}
                name="title"
                w={25}
                isReset={reset} />

            <Input
                onChangeVal={handleChangeInput}
                name="description"
                w={25}
                isReset={reset} />

            <InputSelect
                name="status"
                onChangeVal={handleChangeInput}
                isReset={reset}
            />

            <Button
                isDisabled={isDisabled}
                type="submit">
                {actionName}
                {isLoading ? <Loader /> : null}
            </Button>

            <Message content={msg.content} color={msg.error ? "danger" : "success"} alert />
            
        </form>
    )
}