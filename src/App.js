import AppRoutes from "./routes";
import { TodoProvider } from "shared/context/todo"

function App() {
  return (
    <TodoProvider>
      <AppRoutes />
    </TodoProvider>
  )
}

export default App;