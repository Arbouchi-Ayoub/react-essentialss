export class TaskModel{
    constructor(id =0,title="",completed=false,userId=1){
        this.id=id
        this.title=title
        this.completed=completed
        this.userId=userId
    }
}