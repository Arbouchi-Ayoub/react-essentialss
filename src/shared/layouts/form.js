import { Input, InputSelect, Button, Loader, Message } from "shared/interface"
import { StatusTodo } from "model"
import { useEffect, useState } from "react"

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

export const FormUI = ({ actionName, isLoading = false, onSubmit, msg, delay = 2000 }) => {

    const [isDisabled, setDisabled] = useState(true)
    const [reset, setReset] = useState(false)
    const [hideMsg, setHideMsg] = useState(true)



    useEffect(() => {
        if (msg.content !== "") {
            if(!msg.error){
                setReset(true)
                setReset(false)
            }
            setHideMsg(false)
            setTimeout(() => {
                setHideMsg(true)
                setReset(true)
            }, delay)
        }
    }, [msg])


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(data)
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

            {
                hideMsg ? null : <Message
                    content={msg.content}
                    color={msg.error ? "danger" : "success"}
                    alert />
            }

        </form>
    )
}