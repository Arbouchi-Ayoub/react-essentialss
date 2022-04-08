import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
    AddTodoPage,
    DetailsTodoPage,
    EditTodoPage,
    ListTodoPage
} from "pages"

import {ErrorPage404} from "pages/errors/404"



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    /* 
                        <Route path="" element={<>salam mehdi 1</>}></Route>
                        <Route path="" element={<>salam mehdi 2</>}></Route>
                    */
                }

                <Route path="todos" element={<ListTodoPage />} />
                <Route path="todo/edit/:todoId" element={<EditTodoPage />} />
                <Route path="todo/add" element={<AddTodoPage />} />
                <Route path="todo/:todoId/details" element={<DetailsTodoPage />} />
                <Route path="*" element={<ErrorPage404 />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes