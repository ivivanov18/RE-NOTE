import React from "react";
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

const styles = {
  card: {
    width: 500,
    marginTop: "20px"
  },
  media: {
    height: 300
  }
};

function ViewNote({ id, classes, navigate }) {
  return (
    <Consumer>
      {context => {
        const note = context.notes.find(note => note.id === id);
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
                  {note.title}
                </Typography>
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    name="description"
                    multiline
                    rowsMax="10"
                    value={note.description}
                    margin="normal"
                    disabled
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
                    context.updateSearchMode(true);
                    navigate("/");
                  }}
                >
                  Return
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      }}
    </Consumer>
  );
}

export default withStyles(styles)(ViewNote);
