import { useEffect, useRef, useState } from "react"
import { StatusTodo, TaskModel } from "model/task"
import { isDisabled } from "@testing-library/user-event/dist/utils"

const Message = ({ content = "", color = "danger" }) => {
    return (
        <p className={content ? "text-" + color : "d-none"} >
            {content}
        </p>
    )
}

const Loader = ({ color = "dark", size = 20 }) => {
    return (
        <div class={`spinner-grow text-${color}`} style={{ height: size, width: size }}>
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}

//helpers
const isLocatedInStatusTodo = (val) => {
    let isLocated = false
    Object.keys(StatusTodo).map(k => {
        if (StatusTodo[k] === val) isLocated = true
    })
    return isLocated
}


const InputSelect = ({ w = 50, withVal = StatusTodo.TODO, onChange }) => {

    const [input, setInput] = useState(withVal)
    const handleChange = (e) => {
        const val = e.target.value
        const isAnErrorExist = !val || !isLocatedInStatusTodo(val)
        onChange({ status: val }, isAnErrorExist)
        setInput(val)
    }

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
            <Message content={!input ? "this field is required" : ""} />
        </>


    )
}

const Input = ({ name, type = "text", w = 50, withVal = "", onChange }) => {

    const [input, setInput] = useState(withVal)
    const [firstTime, setFirstTime] = useState(true)

    const handleChange = (e) => {
        let val = e.target.value
        setInput(val)
        if (firstTime) setFirstTime(false)
        let isAnErrorExist = val === ""
        onChange({ [name]: val }, isAnErrorExist)
    }

    return (
        <>
            <div className={`form-floating mb-3 w-${w} mx-auto p-0`}>
                <input
                    name={name}
                    type={type}
                    className={`form-control ${!input && !firstTime ? "border-danger" : ""}`}
                    placeholder={name}
                    onChange={handleChange}
                    value={input}

                />
                <label className="text-capitalize">
                    {name}
                </label>
            </div >
            <Message content={!input && !firstTime ? "this field is required" : ""} />

        </>

    )
}

const Btn = ({ children, color = "warning", type = "button", disabled }) => {
    return (
        <span style={{ cursor: !disabled ? "" : "not-allowed" }}>
            <button type={type} className={`btn btn-${color} `} disabled={disabled} style={{ pointerEvents: !disabled ? "" : "none" }}>
                <div className="d-flex gap-2 align-items-center text-uppercase">
                    {children}
                </div>
            </button>
        </span>
    )
}



class FormData {
    constructor(inputs = {}, isAnErrorExist = false) { this.inputs = inputs; this.isAnErrorExist = isAnErrorExist }
}

export const FormUI = ({ actionName, isLoading = false, onSubmit }) => {

    //state
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
            <Input onChange={handleChangeInput} name="title" w={25} />
            <Input onChange={handleChangeInput} name="description" w={25} />
            <InputSelect onChange={handleChangeInput} />
            <Btn type="submit" disabled={isDisabled()}>
                {actionName}
                {
                    isLoading ? <Loader /> : null
                }
            </Btn>
        </form>
    )
}