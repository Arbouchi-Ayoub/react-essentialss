import { Input, InputSelect, Button, Loader, Message } from "shared/interface"
import { StatusTodo } from "model"
import { useEffect, useState } from "react"
import { isThereAnEmptyValue } from "helpers"

let data = {
    title: "",
    description: "",
    status: StatusTodo.TODO
}

export const FormUI = ({
    actionName,
    isLoading = false,
    onSubmit,
    msg,
    delay = 2000 }) => {

    const [isDisabled, setDisabled] = useState(true)
    const [reset, setReset] = useState(false)
    const [hideMsg, setHideMsg] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(data, setReset)
    }

    const handleChangeInput = (input) => {
        data = { ...data, ...input }
        setDisabled(isThereAnEmptyValue(data))
    }

    useEffect(() => {

        if (msg.content !== "") {
            setHideMsg(false)
            setTimeout(() => setHideMsg(true), delay)
        }

    }, [msg])

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

            {
                !hideMsg && <Message
                    content={msg.content}
                    color={msg.error ? "danger" : "success"}
                    alert
                />
            }

        </form>
    )
}