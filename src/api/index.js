import { client } from "tools/axios"
import { TaskModel } from "model"

export class TodoApi {

    static post(todo = new TaskModel()) {
        return client.request({
            url: "/todos",
            data: todo
        })
    }
}