import React from "react";
import Note from "./Note";
import { Consumer } from "../AppContext";

const style = {
  display: "flex",
  flexWrap: "wrap",
  // justifyContent: "space-between",
  alignItems: "space-between",
  marginTop: "20px",
  marginLeft: "100px",
  marginRight: "100px"
};
const NotesList = ({ notes }) => (
  <Consumer>
    {context => (
      <div style={style} className="list-notes">
        {context.notes.map(note => {
          return (
            <Note
              key={note.id}
              title={note.title}
              description={note.description}
              id={note.id}
            />
          );
        })}
      </div>
    )}
  </Consumer>
);

export default NotesList;
