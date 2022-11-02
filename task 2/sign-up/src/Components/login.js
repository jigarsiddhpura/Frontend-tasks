import React from "react";
import { Link } from "react-router-dom";

// import changePg from './index';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "400px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const textFieldStyle = { margin: "10px" };
  const checkboxStyle = { position: "relative", right: "28%" };
  const btnStyle = {margin:'5px  '}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>

          <TextField
            id="outlined-basic"
            label="Username"
            placeholder="Enter Username"
            variant="outlined"
            fullWidth
            required
            style={textFieldStyle}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            style={textFieldStyle}
          />

          <FormControlLabel
            control={<Checkbox color="success" />}
            label="Remember me"
            style={checkboxStyle}
          />

          <Button variant="contained" color="success" style={btnStyle} fullWidth>
            SIGN IN
          </Button>

        <Typography>
          <Link to="#" underline="hover">
            Forgot password ?
          </Link>
          </Typography>

        <Typography>
          Do you have an account ? 
          <Link to="/signup" underline="hover ">
            Sign Up
          </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Login;
