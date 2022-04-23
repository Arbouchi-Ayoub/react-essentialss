
export const Message = ({
    content = "",
    color = "danger",
    alert = false
}) => {

    return (
        <p className={`
                    m-2 ${alert && 'alert alert-' + color} 
                    ${content ? "text-" + color : "d-none"}`
        }>
            {content}
        </p >

    )
}