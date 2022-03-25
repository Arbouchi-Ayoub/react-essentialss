import axios from "axios";
import { useEffect, useState } from "react";
import { AddTask, ListTask } from "./components";
import Loader from "./shared/loader";
import Message from "./shared/message";

function App() {
  const [tasks, setTasks] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  let setLoaderForDeleteTask = () => {};

  //le comp est branche
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((r) => {
          setLoading(false);
          setTasks(r.data);
          setErrorMsg("");
        })
        .catch((e) => {
          setLoading(false);
          // console.log(Object.keys(e.response.data));
          setErrorMsg("Error Server");
        });
    }, 2000);
  }, []);

  //______Actions______
  const deleteTaskById = (taskId, setLoading) => {
    // console.log(f)
    setLoaderForDeleteTask = (s) => {
      setLoading(s);
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
    };
    setTimeout(() => {
      axios
        .delete(`https://jsonplaceholder.typicode.com/tod/0`)
        .then((r) => {
          //delete task from state (ui)
          setTasks([...tasks.filter((t) => t.id !== taskId)]);
          setErrorMsg("");
        })
        .catch((e) => {
          setErrorMsg("Error Server");
          setLoaderForDeleteTask(false);
        });
    }, 2000);
  };

  return (
    <>
      <div className="text-center">
        <AddTask />
        <hr />
        {loading ? (
          <Loader />
        ) : (
          <ListTask list={tasks} onDeleteTask={deleteTaskById} />
        )}
        <Message msg={errorMsg} status="danger" />
      </div>
    </>
  );
}

export default App;
