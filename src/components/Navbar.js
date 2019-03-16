import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link } from "@reach/router";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20
  }
};

const Navbar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              RE-NOTE
            </Link>
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Add"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="add-note"
            >
              <Icon>add_circle</Icon>
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
