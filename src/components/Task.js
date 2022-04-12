import { TaskModel } from "model";

export const Task = ({ data = new TaskModel()}) => {

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
