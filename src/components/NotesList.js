import React from "react";
import Note from "./Note";
import Grid from "@material-ui/core/Grid";

import { Consumer } from "../AppContext";

const style = {
  display: "flex",
  flexWrap: "wrap",
  flex: "1 1 0",
  // justifyContent: "space-between",
  alignItems: "space-between",
  marginTop: "20px",
  marginRight: "auto",
  marginLeft: "20px"
};
function NotesList(props) {
  return (
    <Consumer>
      {context => {
        return (
          <Grid container spacing={3} style={style}>
            {context.notes.length > 0 &&
              context.notes
                .filter(
                  note =>
                    note.title.includes(context.searchTerm) ||
                    note.description.includes(context.searchTerm)
                )
                .map(note => (
                  <Note
                    key={note.id}
                    title={note.title}
                    description={note.description}
                    id={note.id}
                  />
                ))}
          </Grid>
        );
      }}
    </Consumer>
  );
}

export default NotesList;
