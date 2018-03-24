import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";

import footerStyle from "../../../src/variables/styles/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#user" className={classes.block}>
                Profile
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#editor" className={classes.block}>
               Editor
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Portfolio" className={classes.block}>
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Portfolio" className={classes.block}>
                Publisher
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
              Mark Madden
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
