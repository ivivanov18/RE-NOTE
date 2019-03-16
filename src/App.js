import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
import MainRouter from "./components/MainRouter";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%", backgroundColor: "#F0F0F0" }}>
        <React.Fragment>
          <CssBaseline />
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
