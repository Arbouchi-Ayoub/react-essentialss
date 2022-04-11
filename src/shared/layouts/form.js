import { useState } from "react";
import { Input, InputSelect, Btn, Loader, Message } from "shared/interface"

class FormData {
    constructor(inputs = {}, isAnErrorExist = false) { this.inputs = inputs; this.isAnErrorExist = isAnErrorExist }
}

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
            <Btn
                type="submit"
                disabled={isDisabled()}>
                {actionName}
                {isLoading ? <Loader /> : null}
            </Btn>
            <Message color="success" content={message} alert />
        </form>
    )
}