import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Consumer } from "../AppContext";
import { Link } from "@reach/router";

const styles = {
  card: {
    maxWidth: 275,
    marginBottom: 20,
    marginRight: 20
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between"
  }
};

const Note = ({ id, title, description, classes }) => {
  return (
    <Consumer>
      {context => (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className="description" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/note/${id}`}
            >
              <Button size="small">View</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/update/${id}`}
              state={{
                id,
                initialTitle: title,
                initialDescription: description
              }}
            >
              <Button size="small">Update</Button>
            </Link>
            <Button size="small" onClick={() => context.deleteNote(id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      )}
    </Consumer>
  );
};

Note.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default withStyles(styles)(Note);
