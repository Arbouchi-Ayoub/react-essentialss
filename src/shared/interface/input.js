import { StatusTodo } from 'model'
import { useEffect, useState } from 'react'
import { isLocatedInStatusTodo } from 'helpers'
import { Message } from "shared/interface"

export const InputSelect = ({ name, w = 50, withVal = StatusTodo.TODO, onChangeVal, isReset = false }) => {

    const [input, setInput] = useState(withVal)

    const handleChange = (e) => {
        const val = e.target.value
        onChangeVal({ [name]: val })
        setInput(val)
    }

    useEffect(() => {
        if(isReset)
        setInput(StatusTodo.TODO)
    }, [isReset])

    return (

        <>
            <select
                onChange={handleChange}
                value={input}
                name={name}
                className={`form-select text-capitalize w-${w} mx-auto mb-3`}
            >
                {
                    Object.keys(StatusTodo).map((key, i) => (
                        <option key={i} value={StatusTodo[key]}>{key}</option>
                    ))
                }

            </select>
            <Message content={!input ? " this field is required" : ""} />
            <Message content={!isLocatedInStatusTodo(input) ? "invalid status task value " : ""} />
        </>


    )
}

//withval : in case we gonna use for edit feature 
export const Input = ({ name, type = "text", w = 50, withVal = "", onChangeVal, isReset = false }) => {

    const [input, setInput] = useState(withVal)
    const [firstTime, setFirstTime] = useState(true)

    const handleChange = (e) => {
        let val = e.target.value
        onChangeVal({ [name]: val })
        setInput(val)
        if (firstTime) setFirstTime(false)
    }

    useEffect(() => {
        if(isReset){
            setInput("")
            setFirstTime(true)
        }
        
    }, [isReset])

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
