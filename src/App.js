import axios from "axios";
import { useEffect, useState } from "react";
import { AddTask, ListTask } from "./components";
import Loader from "./shared/loader";
import Message from "./shared/message";

function App() {
  const [tasks, setTasks] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <div className="text-center">
        <AddTask />
        <hr />
        {loading ? <Loader /> : <ListTask list={tasks} />}
        <Message msg={errorMsg} status="danger" />
      </div>
    </>
  );
}

export default App;
