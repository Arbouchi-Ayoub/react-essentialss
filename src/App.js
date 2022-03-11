import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { TASK_DATA } from "./data/task";
import { TaskModel } from "./model/task";

function App() {
  const [listTask, setListTask] = useState(TASK_DATA);

  //add new task
  const addNewTask = (titleTask) => {
    // alert(titleTask);
    setListTask([
      ...listTask,
      new TaskModel(
        (listTask[listTask.length - 1] ? listTask[listTask.length - 1].id : 0) +
          1,
        titleTask
      ),
    ]);
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

  const filterTask = (queryTitle)=>{
    let listCopy = [...listTask]
    
    if(queryTitle!=="")
    setListTask(
      listTask.filter(
        t=>t.title.includes(queryTitle)
      )
    )
  }

  return (
    <>
      <div>
        <AddTask onAddTask={addNewTask} />
        <hr />
        <ListTask
          list={listTask}
          onDeleteTask={deleteTaskById}
          onEditTask={editTaskById}
          onFilterTask={filterTask}
        />
      </div>
    </>
  );
}

export default App;
