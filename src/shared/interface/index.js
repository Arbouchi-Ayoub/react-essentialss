import { useEffect, useRef, useState } from "react"
import { StatusTodo } from "model/task"

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
                {
                    Object.keys(StatusTodo).map((key,i) => (
                        <option key={i} value={StatusTodo[key]}>{key}</option>
                    ))
                }

            </select>
            <Message content={!input ? "this field is required" : ""} />
        </>


    )
}

const Input = ({ placeholder, type = "text", w = 50, withVal = "" }) => {

    const [input, setInput] = useState(withVal)
    const [firstTime,setFirstTime] = useState(true)
    
    const handleChange = (e) => {
        setInput(e.target.value)
        if(firstTime) setFirstTime(false)
    }

    // useEffect(() => {
    //   setInput(" ")
    // }, [])

    return (
        <>

            <div className={`form-floating mb-3 w-${w} mx-auto p-0`}>
                <input
                    type={type}
                    className={`form-control ${!input && !firstTime ? "border-danger" : ""}`}
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={input}
                  
                />
                <label>
                    {placeholder}
                </label>
            </div >

            {/* message  */}
            {/* 
                <p className={!input ? "text-danger" : "d-none"} >
                    this field is required !
                </p>
                {
                    input && <p className="text-danger"> this field is required !</p>
                } 
            */}

            <Message content={!input && !firstTime ? "this field is required" : ""} />

        </>

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

// Btn delete case 
{/* 
<button class="btn btn-danger">
    <i className="fas fa-trush"></i>
</button> 
*/}

//submit btn 
{/* 
<button type="submit">
    save 
    <Loader/>
</button> 
*/}


export const FormUI = ({ actionName, isLoading = false, onSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder="Task Title" w={25} withVal="title 1" />
            <Input placeholder="Task Description" w={25}/>
            <InputSelect />
            <Btn type="submit" >
                {actionName}
                {
                    isLoading ? <Loader /> : null
                }
            </Btn>
        </form>
    )
}