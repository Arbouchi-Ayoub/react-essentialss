export const Loader = ({ color = "dark", size = 20 }) => {
    return (
        <div class={`spinner-grow text-${color}`} style={{ height: size, width: size }}>
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}