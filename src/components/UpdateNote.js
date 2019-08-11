import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Consumer } from "../AppContext";
import uuidv4 from "uuid/v4";

const styles = {
  card: {
    width: 500,
    marginTop: "20px"
  },
  media: {
    height: 300
  }
};

class UpdateNote extends Component {
  constructor(props) {
    super(props);
    const { initialTitle, initialDescription } = props.location.state;
    this.state = {
      title: initialTitle,
      description: initialDescription,
      error: {
        title: false,
        description: false
      }
    };
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState(currentState => {
      return {
        ...currentState,
        [name]: value,
        error: { ...currentState.error, [name]: false }
      };
    });
  };

  handleSubmit = context => {
    const { navigate } = this.props;
    const { title, description } = this.state;
    if (title === "" || description === "") {
      if (title === "") {
        this.setState(currentState => {
          return {
            ...currentState,
            error: { ...currentState.error, title: true }
          };
        });
      }
      if (description === "") {
        this.setState(currentState => {
          return {
            ...currentState,
            error: { ...currentState.error, description: true }
          };
        });
      }
      return;
    }
    context.addNote({ title, description, id: this.props.id });
    navigate("/");
  };

  render() {
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <Consumer>
        {context => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/images/typewrite.jpg"
                  title="Image by Free-Photos from Pixabay"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ADD NOTE
                  </Typography>
                  <form style={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                      label="Title"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      margin="normal"
                      required
                      error={error && error.title ? true : false}
                    />
                    <TextField
                      label="Description"
                      name="description"
                      multiline
                      rowsMax="10"
                      value={this.state.description}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                      required
                      error={error && error.description ? true : false}
                    />
                  </form>
                </CardContent>

                <CardActions
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      this.handleSubmit(context);
                    }}
                  >
                    Update
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default withStyles(styles)(UpdateNote);
