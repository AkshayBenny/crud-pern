import React from "react";
import Header from "./components/header/Header";
import Note from "./components/note/Note";
import Footer from "./components/footer/Footer";
import notes from "./notes_eg";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => {
        return <Note id={note.key} heading={note.title} body={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
