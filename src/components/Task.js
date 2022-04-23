import { TaskModel } from "model";
import { useState } from "react";
import { Button, Loader } from "shared/interface";

export const Task = ({ data = new TaskModel(), onDelete }) => {

  const [loading, setLoading] = useState(false)
    
  const handleDelete = () => {
    if (window.confirm("Are you sure ?")) {
      onDelete(data.id,setLoading)
    }
  }

  const handleEdit = () => alert("Edit task ...")
  const handleMoreDetails = () => alert("More details ...")

  return (
    <li className="list-group-item d-flex justify-content-between w-50 mx-auto align-items-center">

      <div>
        <input type="checkbox" /> <span>{data.title}</span>
      </div>

      <div>

        <Button
          color="danger"
          className="me-1"
          onClick={handleDelete}
        >
          DEL
          {loading ? <Loader /> : null}
        </Button>

        <Button
          color="primary"
          className="me-1"
          onClick={handleEdit}
        >
          EDIT
        </Button>

        <Button onClick={handleMoreDetails}>
          DETAILS
        </Button>

      </div>
    </li>
  );
};