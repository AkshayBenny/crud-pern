import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import notes from "./notes_eg";
import getNote from "./components/note/noteExtractor/extract";

function App() {
  return (
    <div>
      <Header />
      {notes.map(getNote)}
      <Footer />
    </div>
  );
}

export default App;
