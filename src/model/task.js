export const StatusTodo = {

    TODO: "TODO",
    DONE: "DONE",
    INPROGRESS: "INPROGRESS",
    REJECTED: "REJECTED",
}




export class TaskModel {
    constructor(
        id = 0,
        title = "",
        desc = "",
        status = StatusTodo.TODO,
        dueDate = null,
        startDate = null,
        endDate = null,
        userId = 1) {

        this.desc = desc
        this.dueDate = dueDate
        this.startDate = startDate
        this.endDate = endDate
        this.status = status
        this.id = id
        this.title = title
        this.userId = userId
    }
}