import Note from "../Note";

function getNote(note) {
  return <Note id={note.key} heading={note.title} body={note.content} />;
}

export default getNote;
