import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import { getData } from "./data/data";
import NotesList from "./components/NotesList";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%", backgroundColor: "#F0F0F0" }}>
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <NotesList notes={getData(10)} />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
