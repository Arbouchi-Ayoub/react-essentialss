
import {
    AddTodoPage,
    DetailsTodoPage,
    EditTodoPage,
    ListTodoPage
} from "pages"
import {
    Route,
    Router as BrowserRouter, Router, Routes
} from "react-router-dom"





export const Config = () => {
    return (
        <Router>
            <Routes>
                <Route path="todo/add" element={<AddTodoPage />} />
                <Route path="todo/edit" element={<EditTodoPage />} />
                <Route path="todo/list" element={<ListTodoPage />} />
                <Route path="todo/:id/details" element={<DetailsTodoPage />} />
            </Routes>
        </Router>
    )
}

