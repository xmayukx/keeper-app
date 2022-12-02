import React from "react";

function Note(prop) {
  // console.log(props);
  return (
    <div className="note">
      <h1>{prop.head}</h1>
      <p>{prop.body}</p>
    </div>
  );
}

export default Note;
