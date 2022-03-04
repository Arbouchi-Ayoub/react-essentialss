import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  let [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <>
      <div>
        <AddTask />
        <hr />
        <ListTask />
      </div>
    </>
  );
}

export default App;
