import React, { Component } from "react";
import NotesList from "./NotesList";
import { getData } from "../data/data";

class Home extends Component {
  render() {
    return <NotesList notes={getData(20)} />;
  }
}

export default Home;
