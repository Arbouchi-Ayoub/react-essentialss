//enum class 
// export class StatusTodo {
//     static get TODO() {
//         return "TODO"
//     }
//     static get INPROGRESS() {
//         return "INPROGRESS"
//     }
//     static get DONE() {
//         return "DONE"
//     }
//     static get REJECTED() {
//         return "REJECTED"
//     }
// }

export const StatusTodo = {

    TODO :"TODO",
    DONE :"DONE",
    INPROGRESS :"INPROGRESS",
    REJECTED :"REJECTED",
}




export class TaskModel {
    constructor(
        id = 0,
        title = "",
        desc = "",
        dueDate = null,
        InpDate = null,
        finDate = null,
        status = StatusTodo.TODO,userId=1) {
            
        this.desc = desc
        this.dueDate = dueDate
        this.InpDate = InpDate
        this.finDate = finDate
        this.status = status
        this.id = id
        this.title = title
        this.userId=userId
    }
}