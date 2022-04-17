import { Task } from "components";
import { TaskModel } from "model";


export const ListTask = ({ list = [new TaskModel()], onDeleteTask }) => {
  return (
    <ul>
      {
        list.map( t => <Task key={t.id} data={t} onDelete={onDeleteTask} />)
      }
    </ul>
  )
};