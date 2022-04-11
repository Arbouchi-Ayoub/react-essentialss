
export const Btn = ({ children, color = "warning", type = "button", disabled }) => {
    return (
        <span style={{ cursor: !disabled ? "" : "not-allowed" }}>
            <button type={type} className={`btn btn-${color} `}
                disabled={disabled}
                style={{ pointerEvents: !disabled ? "" : "none" }}>
                <div className="d-flex gap-2 align-items-center text-uppercase">
                    {children}
                </div>
            </button>
        </span>
    )
}