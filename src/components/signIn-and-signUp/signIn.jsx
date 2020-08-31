import React, { useState } from "react";
import { Grid, Typography, TextField, Paper } from "@material-ui/core";

import CustomButton from "../customButton/customButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { useStyles, SignUp, SignUpLink } from "./signin.styles";

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container justify="center" className={classes.signIn}>
      <Grid item xs={12} sm={6} md={4}>
        <form onSubmit={handleSubmit}>
          <Paper elevation={5} className={classes.signInContainer}>
            <Typography
              align="center"
              variant="h4"
              gutterBottom
              className={classes.signInHeader}
            >
              I already have an account
            </Typography>
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CustomButton variant="outlined" fullWidth type="submit">
              Sign In
            </CustomButton>
            <CustomButton
              variant="outlined"
              fullWidth
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </Paper>
          <SignUp>
            <Typography className={classes.signUpHeader}>
              Don't have an account?
            </Typography>
            <SignUpLink to="/signup">Sign Up</SignUpLink>
          </SignUp>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignIn;
