import { TaskModel } from "../model/task"

//types 
export const TypeTodo = {
    ADD : "ADD",
    EDIT : "EDIT",
    DEL : "DEL",
}


// todo reducer
export const todoReducer = (prevState, {type,payload}) => {

    switch (type) {
      case "ADD":
        return [
          ...prevState,
          new TaskModel(
            (prevState[prevState.length - 1]
              ? prevState[prevState.length - 1].id : 0) +
            1,
            payload.title
          ),
        ]
  
      case "EDIT":
        return prevState.map(
          t => {
            if (t.id === payload.taskId) {
              t.title = payload.title
            }
            return t
          }
        )
      case "DEL": return prevState.filter((t) => t.id !== payload.taskId); 
    }
  }
  
  