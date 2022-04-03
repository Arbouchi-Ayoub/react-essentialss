import { useReducer } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { TASK_DATA } from "./data/task";
import { ActionModel } from "./model/action";
import { todoReducer, TypeTodo } from "./reducers/todo";

const { ADD, DEL, EDIT } = TypeTodo

function App() {

  const [tasks, dispatch] = useReducer(todoReducer, TASK_DATA)



  return (
    <>
      <div>
        <AddTask onAddTask={(title) => dispatch(new ActionModel(ADD, { title }))} />

        <hr />
        <ListTask
          list={tasks}
          onDeleteTask={(taskId) => dispatch(new ActionModel(DEL, { taskId }))}
          onEditTask={(title, taskId) => dispatch(new ActionModel(EDIT, { title, taskId }))}
        />
      </div>
    </>
  );
}

export default App;
