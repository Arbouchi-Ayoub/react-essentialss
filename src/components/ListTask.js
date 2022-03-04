import React from "react";
import Task from "./Task";

const ListTask = () => {
  return (
    <>
      <h1 className="text-center">List Task</h1>
      <input
        type="text"
        className="form-control w-50 mx-auto"
        placeholder="filter by title"
      />
      <ul className="list-group m-1">
        <Task/>
      </ul>
    </>
  );
};

export default ListTask;
