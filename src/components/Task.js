import React from "react";
import { TaskModel } from "../model/task";

const Task = ({ data = new TaskModel(), onDelete, onEdit }) => {

  console.log("render TASK 🐭")

  const handleClickDel = () => {
    if (window.confirm("Are you sure ? ")) onDelete(data.id);
  };

  const handleClickEdit = () => {
    onEdit(data);
  };

  return (
    <li className="list-group-item d-flex justify-content-between w-50 mx-auto align-items-center">
      <div>
        <input type="checkbox" /> <span>{data.title}</span>
      </div>
      <div>
        <button className="btn btn-danger me-1" onClick={handleClickDel}>
          DEL
        </button>
        <button
          onClick={handleClickEdit}
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          EDIT
        </button>
      </div>
    </li>
  );
};

export default Task;
