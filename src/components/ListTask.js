import { Task } from "components";
import { UseHook } from "hook";

export const ListTask = ({ list = [] }) => {

  const {onDeleteTask} = UseHook.DeleteTodo()

  return (
    <ul>
      {
        list.map(t => <Task key={t.id} data={t} onDelete={onDeleteTask} />)
      }
    </ul>
  )
};