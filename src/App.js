import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { TASK_DATA } from "./data/task";
import { TaskModel } from "./model/task";

function App() {
  const [listTask, setListTask] = useState(TASK_DATA);
  const [listTaskBuckup, setListTaskBuckup] = useState(TASK_DATA);

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

    setListTaskBuckup(newList)
  };

  const deleteTaskById = (taskId) => {
    let newListTask = listTask.filter((t) => t.id !== taskId);
    setListTask(newListTask);
    setListTaskBuckup(newListTask)
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
    setListTaskBuckup(newListTask)
  };

  const filterTask = (queryTitle)=>{
    
    if(queryTitle!=="")
    setListTask(
      listTaskBuckup.filter(
        t=>t.title.includes(queryTitle)
      )
    )
    else 
    setListTask(listTaskBuckup)
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
