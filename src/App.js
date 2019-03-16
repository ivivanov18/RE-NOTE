import React, { Component } from "react";
import { Router } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import { Provider } from "./AppContext";
import { getData } from "./data/data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(11),
      addNote: this.addNote,
      deleteNote: this.deleteNote
    };
  }

  addNote = note => {
    this.state.notes.push(note);
  };

  deleteNote = idNoteToDelete => {
    const notesWithoutDeleted = this.state.notes.filter(
      note => note.id !== idNoteToDelete
    );
    this.setState({
      notes: notesWithoutDeleted
    });
  };

  updateNote = noteToUpdate => {};

  render() {
    return (
      <div style={{ height: "100%", backgroundColor: "#F0F0F0" }}>
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <Provider value={this.state}>
            <Router>
              <NotesList path="/" />
              <AddNote path="add-note" />
            </Router>
          </Provider>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
