import React from "react";

const Task = ({title,desc}) => {
  return (
    <li className="list-group-item d-flex justify-content-between w-50 mx-auto align-items-center">
      <div>
        <input type="checkbox" /> <span>{title}</span>
      </div>
      <div>
        <button className="btn btn-danger me-1">DEL</button>
        <button className="btn btn-primary">EDIT</button>
      </div>
    </li>
  );
};

export default Task;
