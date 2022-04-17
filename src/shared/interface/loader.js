export const Loader = ({ color = "dark", size = 20 }) => {
    return (
        <div className={`spinner-grow text-${color}`} style={{ height: size, width: size }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}