import React from "react";

export const Message = ({msg,status="success"}) => {
  return (
    <div className={msg !== "" ? `alert alert-${status}` : "d-none"}>
      {msg}
    </div>
  );
};
