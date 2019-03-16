import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AddNote from "./AddNote";

const MainRouter = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add-note" component={AddNote} />
      <Route path="/note/:noteId" component={AddNote} />
    </Switch>
  </React.Fragment>
);

export default MainRouter;
