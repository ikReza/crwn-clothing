import React, { useState } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";

import "./signIn.scss";
import CustomButton from "../customButton/customButton";

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
      <Grid item xs={10} sm={6} md={4}>
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
        </form>
      </Grid>
    </Grid>
  );
};

export default SignIn;
