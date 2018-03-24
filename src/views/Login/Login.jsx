import React from "react";
import { Grid, withStyles } from "material-ui";

import {
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "../../components";

import UserLoginStyles from '../../variables/styles/userLoginStyle'

function UserLogin({ ...props }) {
  return (
      <div>
        <Grid container justify={'center'}>
            <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
                cardTitle="Login"
                content={
                <div>
                    <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                        <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                            fullWidth: true
                        }}
                        />
                    </ItemGrid>
                    </Grid>
                    <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                        <CustomInput
                        labelText="password"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}
                        />
                    </ItemGrid>
                    </Grid>
                </div>
                }
                footer={
                    <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                        <Button color="primary">Login</Button>
                        <Button color="primary">Sign Up</Button>
                    </ItemGrid>
                    </Grid>}
            />
            </ItemGrid>
        </Grid>
        </div>
  );
}
export default withStyles(UserLoginStyles)(UserLogin);