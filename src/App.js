import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <>
      <div>
        <h1 className="text-center">Add Task</h1>
        <div className="w-50 mx-auto d-flex align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="add new task "
          />
          <button className="btn btn-success m-1">add</button>
        </div>
        <hr />
        <h1 className="text-center">List Task</h1>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="filter by title"
        />
        <ul className="list-group m-1">
          <li className="list-group-item d-flex justify-content-between w-50 mx-auto align-items-center">
            <div>
              <input type="checkbox" /> <span>task 1</span>
            </div>
            <div>
              <button className="btn btn-danger">DEL</button>
              <button className="btn btn-primary">EDIT</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
