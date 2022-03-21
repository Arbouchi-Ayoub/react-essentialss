import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { TASK_DATA } from "./data/task";
import { TaskModel } from "./model/task";

function App() {
  console.log("render APP 😇")

  const [listTask, setListTask] = useState(TASK_DATA);

  //add new task
  const addNewTask = (titleTask) => {
    let newList =[
      ...listTask,
      new TaskModel(
        (listTask[listTask.length - 1] 
          ? listTask[listTask.length - 1].id : 0) +
          1,
        titleTask
      ),
    ]
    // alert(titleTask);
    setListTask(newList);
  };

  const deleteTaskById = (taskId) => {
    let newListTask = listTask.filter((t) => t.id !== taskId);
    setListTask(newListTask);
  };

  const editTaskById = (newTitle,taskId) => {
    let newListTask = listTask.map(
      t=>{
        if(t.id===taskId)
        {
          t.title = newTitle
        }
        return t 
      }
    )
    setListTask(newListTask)
  };

  return (
    <>
      <div>
        <AddTask onAddTask={addNewTask} />
        <hr />
        <ListTask
          list={listTask}
          onDeleteTask={deleteTaskById}
          onEditTask={editTaskById}
        />
      </div>
    </>
  );
}

export default App;
