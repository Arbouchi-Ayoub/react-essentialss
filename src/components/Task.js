import { TaskModel } from "model";
import { Button } from "shared/interface";

export const Task = ({ data = new TaskModel() }) => {

  const handleDelete = ()=> alert("Delete task ...")
  const handleEdit = ()=> alert("Edit task ...")
  const handleMoreDetails = ()=>alert("More details ...")
  
  return (
    <li className="list-group-item d-flex justify-content-between w-50 mx-auto align-items-center">
      <div>
        <input type="checkbox" /> <span>{data.title}</span>
      </div>
      <div>
        <Button color="danger" className="me-1" onClick={handleDelete}>
          DEL
        </Button>

        <Button color="primary" className="me-1" onClick={handleEdit} modal target="edit">
          EDIT
        </Button>

        <Button onClick={handleMoreDetails}>
          DETAILS
        </Button>
      </div>
    </li>
  );
};
