import React from "react";

const AppContext = React.createContext({
  notes: [],
  addNote() {},
  deleteNote() {},
  updateNote() {}
});

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;
