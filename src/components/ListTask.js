import React, { useRef, useState } from "react";
import { TaskModel } from "../model/task";
import Task from "./Task";

const ListTask = ({ list, onDeleteTask, onEditTask }) => {

  
  const [filter,setFilter] = useState("")

  console.log("render LIST 🐰")

  //ref
  const refTitle = useRef("");
  //state
  const [updatedTaskID, setUpdatedTaskID] = useState();

  //actions
  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  };
  const handleEditTask = (editedTask = new TaskModel()) => {
    refTitle.current.value = editedTask.title;
    setUpdatedTaskID(editedTask.id);
  };
  const handleUpdateTask = () => {
    let title = refTitle.current.value;
    if (!title) alert("Error Empty values 😥");
    else onEditTask(title, updatedTaskID);
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
  };

  

  return (
    <>
      <h1 className="text-center">List Task</h1>
      <input
        type="text"
        className="form-control w-50 mx-auto"
        placeholder="filter by title"
        onChange={handleChangeFilter}
      />
      <ul className="list-group m-1">
        {/* <Task title="title 1" />
        <Task title="title 2" /> */}
        {list.filter(t=>t.title.includes(filter)).map((t, i) => (
          <Task
            key={t.id}
            data={t}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Task id : ({updatedTaskID})
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="add new task "
                ref={refTitle}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleUpdateTask}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTask;
