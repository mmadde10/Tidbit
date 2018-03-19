import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
const appBarStyle = {
    textAlign: 'center'
}

  const { classes } = props;

class Index extends Component {
  render() {
    return (
      <MuiThemeProvider>
       <div class="appBarContainer">
            <AppBar title="Tidbit" titleStyle={appBarStyle} />
        </div>
        <div class="HeroContainer">
            <Paper style={style} zDepth={4} />
        </div>
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Index;