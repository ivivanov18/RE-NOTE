import React from "react";

const AppContext = React.createContext({
  notes: [],
  searchTerm: "",
  addNote() {},
  deleteNote() {},
  updateNote() {},
  updateSearchTerm() {},
  searchMode: "",
  updateSearchMode() {}
});

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;
