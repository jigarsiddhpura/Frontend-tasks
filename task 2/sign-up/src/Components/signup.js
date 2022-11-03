import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Link ,
  Button,
  Typography,FormControl , FormLabel , RadioGroup , Radio, InputLabel, OutlinedInput, InputAdornment, IconButton 
} from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: "87vh",
    width: "400px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const textFieldStyle = { margin: "10px" };
  // const checkboxStyle = { position: "relative", right: "28%" };
  const btnStyle = { margin: "5px  " };
  const numberStyle = {position:'relative', left:'2.5%'}
  const radioStyle={position:'relative', right:'18%', margin:'4px'};
  const genderStyle={position:'relative', left:'-57%', margin:'2px'};

  // function InputAdornments() {
  //   const [values, setValues] = React.useState({
  //     amount: '',
  //     password: '',
  //     weight: '',
  //     weightRange: '',
  //     showPassword: false,
  //   });
  
    // const handleChange = (prop) => (event) => {
    //   setValues({ ...values, [prop]: event.target.value });
    // };
  
    // const handleClickShowPassword = () => {
    //   setValues({
    //     ...values,
    //     showPassword: !values.showPassword,
    //   });
    // };
  
    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          

          <TextField
            id="outlined-basic"
            label="name"
            placeholder="Enter Name"
            variant="outlined"
            fullWidth
            required
            style={textFieldStyle}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
            type="email"
            fullWidth
            required
            style={textFieldStyle}
          />

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={genderStyle}>Gender</FormLabel >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style={radioStyle}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

    <TextField
          id="outlined-number"
          label="Number"
          type="number"
          fullWidth
          required
          style={numberStyle}
          InputLabelProps={{
            shrink: true,
          }}
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

        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}

          <TextField
            id="outlined-basic"
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            variant="outlined"
            fullWidth
            required
            style={textFieldStyle}
          />


          <Button
            variant="contained"
            color="success"
            style={btnStyle}
            fullWidth
          >
            SIGN UP
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Signup;
