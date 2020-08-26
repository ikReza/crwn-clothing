import React, { useState } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import CustomButton from "../customButton/customButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <Grid container justify="center" className="sign-in">
      <Grid item xs={12} sm={6} md={4}>
        <form onSubmit={handleSubmit}>
          <Typography
            align="center"
            variant="h4"
            gutterBottom
            className="sign-in-header"
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
          <div className="sign-up">
            <Typography className="sign-up-header">
              Don't have an account?
            </Typography>
            <CustomButton variant="outlined" component={Link} to="/signup">
              Sign Up
            </CustomButton>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignIn;
