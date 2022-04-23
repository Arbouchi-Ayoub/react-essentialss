import { client } from "tools/axios"
import { TaskModel } from "model"

export class TodoApi {

    static post(todo = new TaskModel()) {
        return client.request({
            url: "/todos",
            method: "POST",
            data: todo
        })
    }

    static put(todo = new TaskModel()) {
        return client.request({
            url: "/todos/" + todo.id,
            method: "PUT",
            data: todo
        })
    }

    static get(todoId = 0) {
        return client.request({
            url: "/todos/" + todoId,
            method: "GET"
        })
    }

    static getAll() {
        return client.request({
            url: "/todos/",
            method: "GET"
        })
    }

    static delete(todoId = 0) {
        return client.request({
            url: '/todos/' + todoId,
            method: "DELETE"
        })
    }

}