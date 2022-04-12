import { useState } from "react";
import { Input, InputSelect, Button, Loader, Message } from "shared/interface"
import { FormData } from "model"


export const FormUI = ({ actionName, isLoading = false, onSubmit, message }) => {

    const [data, setData] = useState(new FormData())

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(data.inputs)
    }

    const handleChangeInput = (propertyInput, isAnErrorExist) => {
        let key = Object.keys(propertyInput)[0]
        let val = propertyInput[key]
        let inputs = { ...data.inputs, [key]: val }
        setData({ inputs, isAnErrorExist })

    }

    const isDisabled = () => !(Object.keys(data.inputs).length === 3) || data.isAnErrorExist

    return (
        <form onSubmit={handleSubmit}>
            <Input
                onChange={handleChangeInput}
                name="title"
                w={25} />

            <Input
                onChange={handleChangeInput}
                name="description"
                w={25} />

            <InputSelect
                onChange={handleChangeInput}
            />

            <Button
                type="submit"
                disabled={isDisabled()}>
                {actionName}
                {isLoading ? <Loader /> : null}
            </Button>

            <Message msg={message} alert />
        </form>
    )
}