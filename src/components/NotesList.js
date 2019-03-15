import React from "react";
import Note from "./Note";

const NotesList = ({ notes }) =>
  notes.map(note => {
    return <Note title={note.title} description={note.description} />;
  });

export default NotesList;
