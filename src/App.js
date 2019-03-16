import React, { Component } from "react";
import { Router } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%", backgroundColor: "#F0F0F0" }}>
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <Router>
            <NotesList path="/" />
            <AddNote path="add-note" />
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
