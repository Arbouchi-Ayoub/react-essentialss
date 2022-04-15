
export const Button = ({ children, color = "warning", type = "button", isDisabled }) => {
    return (
        <button type={type} className={`btn btn-${color} `}
            disabled={isDisabled}
        >
            <div className="d-flex gap-2 align-items-center text-uppercase">
                {children}
            </div>
        </button>
    )
}