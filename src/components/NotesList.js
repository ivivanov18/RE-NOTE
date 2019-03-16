import React from "react";
import Note from "./Note";
import { getData } from "../data/data";

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
  <div style={style} className="list-notes">
    {getData(20).map(note => {
      return <Note title={note.title} description={note.description} />;
    })}
  </div>
);

export default NotesList;
