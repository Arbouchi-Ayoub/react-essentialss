import { useState } from "react"
import { StatusTodo } from "model/task"

const Message = ({ content = "", type = "danger" }) => {
    return (
        <p className={content ? "text-" + type : "d-none"} >
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

const InputSelect = ({ w = 50, withVal = StatusTodo.TODO }) => {

    const [input, setInput] = useState(withVal)
    const handleChange = (e) => setInput(e.target.value)

    return (

        <>
            <select
                onChange={handleChange}
                value={input}
                className={`form-select text-capitalize w-${w} mx-auto mb-3`}
            >
                <option value={StatusTodo.INPROGRESS}>{StatusTodo.INPROGRESS}</option>
                <option value={StatusTodo.TODO}>{StatusTodo.TODO}</option>
                <option value={StatusTodo.DONE}>{StatusTodo.DONE}</option>
                <option value={StatusTodo.REJECTED}>{StatusTodo.REJECTED}</option>

            </select>
            <Message content={!input ? "this field is required" : ""} />
        </>


    )
}

const Input = ({ placeholder, type = "text", withVal = "_", w = 50 }) => {

    const [input, setInput] = useState(withVal)

    const handleChange = (e) => setInput(e.target.value)

    return (
        <div className={`form-floating mb-3 w-${w} mx-auto p-0`}>
            <input
                id="1"
                type={type}
                className={`form-control ${!input && "border-danger"}`}
                placeholder={placeholder}
                onChange={handleChange}
                value={input}
            />
            <label
                htmlFor="1">
                {placeholder}
            </label>

            <Message content={!input ? "this field is required" : ""} />


        </div >
    )
}

const Btn = ({ children, color = "warning", type = "button" }) => {
    return (
        <button type={type} className={`btn btn-${color} `} >
            <div className="d-flex gap-2 align-items-center text-uppercase">
                {children}
            </div>
        </button>
    )
}
export const FormUI = ({ actionName, isLoading = false,onSubmit }) => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit(e)
    }   
    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder="Task Title" w={25} />
            <Input placeholder="Task Description" w={25} />
            <InputSelect />
            <Btn type="submit" >
                {actionName}
                {
                    isLoading ? <Loader/> : null
                }
            </Btn>
        </form>
    )
}