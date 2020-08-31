import React, { useState } from "react";
import { Grid, Typography, TextField, Paper } from "@material-ui/core";

import CustomButton from "../customButton/customButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { useStyles, SignIn, SignInLink } from "./signUp.styles";

const SignUp = () => {
  const classes = useStyles();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      alert("Password don't match");
      setPassword("");
      setRePassword("");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setRePassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container justify="center" className={classes.signUp}>
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSubmit}>
          <Paper elevation={5} className={classes.signUpContainer}>
            <Typography
              align="center"
              variant="h4"
              gutterBottom
              className={classes.signUpHeader}
            >
              I don't have an account
            </Typography>
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Name"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
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
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Confirm Password"
              type="password"
              required
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <CustomButton variant="outlined" fullWidth type="submit">
              Sign Up
            </CustomButton>
          </Paper>
          <SignIn>
            <Typography className={classes.signInHeader}>
              Already have an account?
            </Typography>
            <SignInLink to="/signin">Sign In</SignInLink>
          </SignIn>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
