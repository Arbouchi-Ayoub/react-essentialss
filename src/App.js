import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { TASK_DATA } from "./data/task";
import { TaskModel } from "./model/task";


// crudTodo
const crudTodo = (nameAction,inputAction,listTask,setListTask) => {

  switch (nameAction) {
    case "ADD": {
      let newList = [
        ...listTask,
        new TaskModel(
          (listTask[listTask.length - 1]
            ? listTask[listTask.length - 1].id : 0) +
          1,
          inputAction.title
        ),
      ]
      setListTask(newList);
    } break;
    case "EDIT": {
      let newListTask = listTask.map(
        t => {
          if (t.id === inputAction.taskId) {
            t.title = inputAction.title
          }
          return t
        }
      )
      setListTask(newListTask)


    } break;

    case "DEL": {
      let newListTask = listTask.filter((t) => t.id !== inputAction.taskId);
      setListTask(newListTask);
    } break;

  }

}



function App() {

  const [listTask, setListTask] = useState(TASK_DATA);
  
  return (
    <>
      <div>
        <AddTask onAddTask={(title)=>crudTodo("ADD",{title},listTask,setListTask)} />
        <hr />
        <ListTask
          list={listTask}
          onDeleteTask={(taskId)=>crudTodo("DEL",{taskId},listTask,setListTask)}
          onEditTask={(title,taskId)=>crudTodo("EDIT",{title,taskId},listTask,setListTask)}
        />
      </div>
    </>
  );
}

export default App;
