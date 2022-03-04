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
    setListTask([...listTask, new TaskModel(listTask.length + 1, titleTask)]);
  };

  return (
    <>
      <div>
        <AddTask onAddTask={addNewTask} />
        <hr />
        <ListTask list={listTask} />
      </div>
    </>
  );
}

export default App;
