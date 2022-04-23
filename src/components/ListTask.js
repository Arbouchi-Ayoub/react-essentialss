import { Task } from "components";


export const ListTask = ({ list = [], onDeleteTask }) => {


  return (
    <ul>
      {
        list.map( t => <Task key={t.id} data={t} onDelete={onDeleteTask} />)
      }
    </ul>
  )
};