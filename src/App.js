import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((r) =>{ 
        setTasks(r.data)
        setError("")
      })
      .catch((e) => {
        // console.log(Object.keys(e.response.data));
        setError("Error Server");
      });
  }, []);

  return (
    <>
      <div>
        <AddTask />
        <hr />
        <ListTask list={tasks} />
        <div className={error!=="" ? "alert alert-danger":"d-none"} >
          {error}
        </div>
      </div>
    </>
  );
}

export default App;
