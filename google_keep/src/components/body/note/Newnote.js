import React, { useState } from "react";
import notes from "../../../notes_eg";

function Newnote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addNote(event) {
    event.preventDefault();
    console.log(content);
    notes.push({
      id: notes.length + 1,
      title: title,
      content: content,
    });
    console.log(notes);
  }
  return (
    <form>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        id="content"
        type="text"
        name="content"
        placeholder="Take a note"
        onChange={(event) => setContent(event.target.value)}
        value={content}
      />
      <button onClick={addNote}>Add</button>
    </form>
  );
}

export default Newnote;
