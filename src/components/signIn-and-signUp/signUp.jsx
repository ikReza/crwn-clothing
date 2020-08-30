import React, { useState } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import CustomButton from "../customButton/customButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signUp.scss";

const SignUp = () => {
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
    <Grid container justify="center" className="signing-up">
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSubmit}>
          <Typography
            align="center"
            variant="h4"
            gutterBottom
            className="signing-up-header"
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
          <div className="signing-in">
            <Typography className="signing-in-header">
              Already have an account?
            </Typography>
            <CustomButton variant="outlined" component={Link} to="/signin">
              Sign In
            </CustomButton>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
