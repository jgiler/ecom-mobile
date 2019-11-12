import React from "react";

const ShowComment = ({ f_name, comments }) => {
  return (
    <div className="commentSection">
      <h2 className="f_name">{f_name}</h2>
      <p className="comments">{comments}</p>
    </div>
  );
};
export default ShowComment;