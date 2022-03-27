import React, { useState } from "react";
import { TaskModel } from "../model/task";
import { Loader } from "../shared";

export const Task = ({ data = new TaskModel(), onDelete, onEdit }) => {
  
  const [loading, setLoading] = useState(false);

  const handleClickDel = () => {
    if (window.confirm("Are you sure ? ")) {
      onDelete(data.id,setLoading);
      setLoading(true);
    }
  };

  const handleClickEdit = () => {
    onEdit(data);
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between w-50 mx-auto align-items-center "
      style={{ opacity: `${loading ? ".5" : "1"}` }}
    >
      <div>
        <input type="checkbox" /> <span>{data.title}</span>
      </div>
      {loading ? (
        <div className="position-absolute text-center w-100">
          <Loader color="danger" />
        </div>
      ) : null}

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
