import React, { useState, useEffect } from "react";
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
import axios from "axios";

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
  const btnStyle = { margin: "5px  " };
  const errorStyle = {
    display: "flex",
    align: "left",
    margin: "-1px",
    color: "red",
  };

  const initialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validateForm = (formValues) => {
    const errors = {};
    const regex_password =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!formValues.email) {
      errors.email = "Email is required!";
    }
    if (!formValues.password) {
      errors.password = "Password is required!";
    } else if (!formValues.password.match(regex_password)) {
      errors.password =
        "Password must contain min 8 characters, 1 uppercase, 1 lowercase & 1 number";
    }
    return errors;
  };

  const postData = async () => {
    try {
      axios
        .post("https://therecipepool.pythonanywhere.com/account/login/", {
          email: formValues.email,
          password: formValues.password,
        })
        .then((response) => {
          localStorage.setItem("refresh_token", response.data.refresh);
          localStorage.setItem("access_token", response.data.access);
        })
        .catch((err) => console.log("error in postData try : ",err));
    } catch (err) {
      console.log("error is", err);
    }
  };


  axios.interceptors.response.use(function (response) {
    axios.post("https://therecipepool.pythonanywhere.com/account/token-refresh/" , {
      refresh: localStorage.getItem("refresh_token"),
    } ,
      {
        headers: {
          'Authorization' : 'Bearer' + localStorage.getItem("access_token"),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then((response) => {
      localStorage.setItem("refreshToken", response.data.refresh);
      localStorage.setItem("accessToken", response.data.access);
      console.log("Logged in");
    })

    return response;
    }, function(error) {
    console.log("error in response interceptor",error);
    return Promise.reject(error);
  });

  // const axiosInstance = axios.create({
  //   baseURL: baseURL,
  //   timeout: 60000,
  //   headers: {
  //     Authorization: localStorage.getItem("access_token")
  //       ? "JWT" + localStorage.getItem("access_token")
  //       : null,
  //     "Content-type": "application/json",
  //     accept: "application/json",
  //   },
  // });

  



  return (
    <Grid>
      <form>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>Sign In</h2>

            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Enter Email"
              variant="outlined"
              fullWidth
              required
              style={textFieldStyle}
              name="email"
              onChange={handleChange}
              value={formValues.email}
            />
            <p style={errorStyle}>{formErrors.username}</p>
            <TextField
              id="outlined-basic"
              label="Password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              fullWidth
              required
              style={textFieldStyle}
              name="password"
              onChange={handleChange}
              value={formValues.password}
            />
            <p style={errorStyle}>{formErrors.password}</p>

            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Remember me"
              style={checkboxStyle}
            />

            <Button
              variant="contained"
              color="success"
              style={btnStyle}
              fullWidth
              onClick={handleSubmit}
            >
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
      </form>
    </Grid>
  );
};
export default Login;
