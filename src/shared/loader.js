import React from "react";

export const Loader = ({color="primary"}) => {
  return (
    <div className={`spinner-grow text-${color}`}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

