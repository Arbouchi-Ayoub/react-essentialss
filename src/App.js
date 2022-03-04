import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { TASK_DATA } from "./data/task";

function App() {
  const [listTask, setListTask] = useState(TASK_DATA)
  return (
    <>
      <div>
        <AddTask />
        <hr />
        <ListTask list={listTask} />
      </div>
    </>
  );
}

export default App;
