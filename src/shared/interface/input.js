import { useEffect, useState } from 'react'
import { isLocatedInStatusTodo } from 'helpers'
import { Message } from "shared/interface"
import { MessageModel, StatusTodo } from 'model'

export const InputSelect = ({ w = 50, withVal = StatusTodo.TODO, onChange }) => {

    const [input, setInput] = useState(withVal)

    const handleChange = (e) => {
        const val = e.target.value
        const isAnErrorExist = !val || !isLocatedInStatusTodo(val)
        onChange({ status: val }, isAnErrorExist)
        setInput(val)
    }

    useEffect(() => {
        onChange({ status: input })
    }, [])


    return (

        <>
            <select
                onChange={handleChange}
                value={input}
                className={`form-select text-capitalize w-${w} mx-auto mb-3`}
            >
                {
                    Object.keys(StatusTodo).map((key, i) => (
                        <option key={i} value={StatusTodo[key]}>{key}</option>
                    ))
                }

            </select>
            <Message
                msg={!isLocatedInStatusTodo(input) ?
                    new MessageModel("invalid status task value")
                    : new MessageModel()} />
        </>


    )
}

export const Input = ({ name, type = "text", w = 50, withVal = "", onChange }) => {

    const [input, setInput] = useState(withVal)
    const [firstTime, setFirstTime] = useState(true)

    const handleChange = (e) => {
        let val = e.target.value
        setInput(val)
        if (firstTime) setFirstTime(false)
        let isAnErrorExist = val === ""
        onChange({ [name]: val }, isAnErrorExist)
    }

    const handleFocus = () => {
        setInput("")
        setFirstTime(true)
    }
    return (
        <>
            <div className={`form-floating mb-3 w-${w} mx-auto p-0`}>
                <input
                    className={`form-control ${!input && !firstTime ? "border-danger" : ""}`}
                    placeholder={name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={input}
                    name={name}
                    type={type}
                />
                <label className="text-capitalize">
                    {name}
                </label>
            </div >

            <Message msg={!input && !firstTime ? new MessageModel("this field is required") : new MessageModel()} />

        </>

    )
}
