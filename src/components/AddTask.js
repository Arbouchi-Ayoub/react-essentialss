import React, { useRef } from "react";

const AddTask = ({onAddTask}) => {
  //ref title
  const refTitle = useRef("");

  const handleClick = () => {
    //get the input title value
    // console.log(refTitle.current.value)
    let titleTask = refTitle.current.value;
    if(!titleTask) alert("empty value error 😥")
    else{
      //send titletask to my parent (app)
      onAddTask(titleTask)
      //set input value to empty
      refTitle.current.value=""
    }
  };

  return (
    <>
      <h1 className="text-center">Add Task</h1>
      <div className="w-50 mx-auto d-flex align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="add new task "
          ref={refTitle}
        />
        <button className="btn btn-success m-1" onClick={handleClick}>
          add
        </button>
      </div>
    </>
  );
};

export default AddTask;
