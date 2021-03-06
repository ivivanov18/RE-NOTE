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
      searchTerm: "",
      addNote: this.addNote,
      deleteNote: this.deleteNote,
      updateNote: this.updateNote,
      updateSearchTerm: this.updateSearchTerm,
      searchMode: true,
      updateSearchMode: this.updateSearchMode
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

  updateSearchMode = value => {
    this.setState({ searchMode: value });
  };

  updateSearchTerm = newTerm => {
    console.log({ newTerm });
    this.setState({ searchTerm: newTerm });
  };

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

  updateNote = noteToUpdate => {
    const indexNoteToUpdate = this.state.notes.findIndex(
      elt => noteToUpdate.id === elt.id
    );
    const { notes } = this.state;
    if (indexNoteToUpdate > -1) {
      this.setState({
        notes: [
          ...notes.slice(0, indexNoteToUpdate),
          noteToUpdate,
          ...notes.slice(indexNoteToUpdate + 1)
        ]
      });
    }
  };

  render() {
    return (
      <div style={{ height: "100%", backgroundColor: "#F0F0F0" }}>
        <React.Fragment>
          <CssBaseline />
          <Provider value={this.state}>
            <Navbar />
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
