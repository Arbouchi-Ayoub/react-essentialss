import { TaskModel } from "model"
import { client } from "tools/axios"

export class TodoApi {

    static post(todo = new TaskModel()) {

        return client.request({
            url: "/todos",
            data: todo
        })
    }
}