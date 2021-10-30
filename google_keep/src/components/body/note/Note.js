import React from "react";
import "./Note.css";

function Note(props) {
  return (
    <div className="note-cont">
      <h4 className="title">{props.heading}</h4>
      <p className="content">{props.body}</p>
    </div>
  );
}

export default Note;
