import React from "react";
import { Grid, withStyles } from "material-ui";
import Auth from "routes/authenticate.jsx"

import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from 'react-router-dom'


import {
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import UserLoginStyles from 'variables/styles/userLoginStyle'

class Login extends React.Component {
    state = {
      redirectToReferrer: false
    }
    login = () => {
      Auth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state
  
      if (redirectToReferrer === true) {
        <Redirect to={from} />
      }
  
      return (
        <div>
          <p>You must log in to view the page</p>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
  }
export default Login;