
export const Button = ({
    children,
    color = "warning",
    type = "button",
    isDisabled = false,
    className = "",
    onClick,
    modal = false,
    target = "" }) => {
    return (
        <span style={{ cursor: !isDisabled ? "" : "not-allowed" }}>
            <button
                type={type}
                className={`btn btn-${color} ${className}`}
                disabled={isDisabled}
                style={{ pointerEvents: !isDisabled ? "" : "none" }}
                onClick={type === "button" ? () => onClick() : null}
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