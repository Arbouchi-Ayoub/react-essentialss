import axios from "axios";
import { useEffect, useState } from "react";
import { AddTask, ListTask } from "./components";
import { TaskModel } from "./model/task";
import { Loader, Message } from "./shared";

function App() {
  const [tasks, setTasks] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
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

  const editTaskById = (title, taskId) => {
    setLoading(true);
    axios
      .put(
        `https://jsonplaceholder.typicode.com/todos/${taskId}`,
        new TaskModel(taskId, title)
      )
      .then((r) => {
        setLoading(false);
        setTasks([...tasks.map((t) => (t.id === taskId ? { ...t, title } : t))]);
        setMsg("Task updated successfully 😃");
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const addNewTask = (newTitle) => {
    setLoading(true);
    axios
      .post(
        `https://jsonplaceholder.typicode.com/todos/`,
        new TaskModel(tasks.at(-1).id + 1, newTitle)
      )
      .then((r) => {
        setLoading(false);
        setTasks([new TaskModel(r.data.id, newTitle), ...tasks]);
        setMsg("Task added successfully 😃");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  const clearMsgs = () => (errorMsg ? setErrorMsg("") : setMsg(""));

  return (
    <>
      <div className="text-center">
        <AddTask onAddTask={addNewTask} onFocus={clearMsgs} />
        <hr />
        {loading ? (
          <Loader />
        ) : (
          <ListTask
            list={tasks}
            onEditTask={editTaskById}
            onDeleteTask={deleteTaskById}
          />
        )}
        <Message msg={errorMsg} status="danger" />
        <Message msg={msg} />
      </div>
    </>
  );
}

export default App;
