import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { AddTask, ListTask } from "./components";
import { TaskModel } from "./model/task";
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
        .delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
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

  const editTaskById = (title, updatedTaskID)=>{
    axios
    .put(`https://jsonplaceholder.typicode.com/todos/${updatedTaskID}`, new TaskModel(updatedTaskID, title))
    .then((r)=>{
      console.log(r);
    })
    .catch((e)=>{
      console.log(e);
    })

  }

  return (
    <>
      <div className="text-center">
        <AddTask />
        <hr />
        {loading ? (
          <Loader />
        ) : (
          <ListTask list={tasks} onEditTask={editTaskById} onDeleteTask={deleteTaskById} />
        )}
        <Message msg={errorMsg} status="danger" />
      </div>
    </>
  );
}

export default App;
