import React from "react";

const AddTask = () => {
  return (
    <>
      <h1 className="text-center">Add Task</h1>
      <div className="w-50 mx-auto d-flex align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="add new task "
        />
        <button className="btn btn-success m-1">add</button>
      </div>
    </>
  );
};

export default AddTask;
