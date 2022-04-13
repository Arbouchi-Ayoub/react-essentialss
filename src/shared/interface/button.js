
export const Button = ({
    children,
    color = "warning",
    type = "button",
    disabled,
    className = "",
    onClick,
    modal = false,
    target = "" }) => {
    return (
        <span style={{ cursor: !disabled ? "" : "not-allowed" }}>
            <button
                type={type}
                className={`btn btn-${color} ${className}`}
                disabled={disabled}
                style={{ pointerEvents: !disabled ? "" : "none" }}
                onClick={() => onClick()}
                data-bs-toggle={modal && "modal"}
                data-bs-target={`#${target}`}
            >
                <div className="d-flex gap-2 align-items-center text-uppercase">
                    {children}
                </div>
            </button>
        </span>
    )
}