import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Consumer } from "../AppContext";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = evt => {
    this.setState({ searchTerm: evt.target.value });
  };

  render() {
    return (
      <Consumer>
        {context =>
          context.searchMode ? (
            <TextField
              style={{ borderBottomColor: "white" }}
              value={context.searchTerm}
              onChange={evt => {
                // this.handleChange(evt);
                console.log("here");
                context.updateSearchTerm(evt.target.value);
              }}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "white" }} />
                  </InputAdornment>
                )
              }}
            />
          ) : null
        }
      </Consumer>
    );
  }
}

export default Search;
