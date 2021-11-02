import React from "react";
import Note from "./note/Note";
import notes from "../../notes_eg";
import Newnote from "./note/Newnote";
import "./Body.css";

function Body() {
  return (
    <div className="body-cont">
      <Newnote />
      <div className="note-container">
        {notes.map((note) => {
          return (
            <Note id={note.key} heading={note.title} body={note.content} />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
