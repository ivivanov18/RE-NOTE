import React, { Component } from "react";
import { Router } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import ViewNote from "./components/ViewNote";
import UpdateNote from "./components/UpdateNote";
import NotesList from "./components/NotesList";
import { Provider } from "./AppContext";
import { getData } from "./data/data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      addNote: this.addNote,
      deleteNote: this.deleteNote
    };
  }

  componentDidMount() {
    const localStoreJSON = localStorage.getItem("notes");
    if (localStoreJSON) {
      try {
        const notes = JSON.parse(localStoreJSON);
        if (Array.isArray(notes)) {
          this.setState({ notes });
        }
      } catch (err) {
        console.error({ err });
      }
    }
  }

  // componentWillUnmount() {
  //   localStorage(JSON.stringify(this.state.notes));
  // }

  addNote = note => {
    const { notes } = this.state;
    const newNotes = [...notes, note];
    this.setState({ notes: newNotes }, () => {
      localStorage.setItem("notes", JSON.stringify(this.state.notes));
    });
  };

  deleteNote = idNoteToDelete => {
    const notesWithoutDeleted = this.state.notes.filter(
      note => note.id !== idNoteToDelete
    );
    this.setState(
      {
        notes: notesWithoutDeleted
      },
      () => {
        localStorage.setItem("notes", JSON.stringify(this.state.notes));
      }
    );
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
              <ViewNote path="note/:id" />
              <UpdateNote path="update/:id" />
            </Router>
          </Provider>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
