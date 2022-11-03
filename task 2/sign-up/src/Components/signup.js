import React, { useState, useEffect } from 'react'; 
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Link ,
  Button,
  Typography,FormControl , FormLabel , RadioGroup , Radio 
} from "@mui/material";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: "93vh",
    width: "420px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green", display:"flex"  };
  const textFieldStyle = { margin: "10px" };
  // const checkboxStyle = { position: "relative", right: "28%" };
  const btnStyle = { margin: "5px  " };
  const numberStyle = {position:'relative', left:'2.5%'}
  const radioStyle={position:'relative', right:'18%', margin:'4px'};
  const genderStyle ={position:'relative', left:'-57%', margin:'2px'};
  // const errorStyle = {position:'relative', left:'-27%', margin:'-1px', color:'red'};
  const errorStyle = {display:"flex" , align:"left" ,margin:'-1px', color:'red' }
  

  const initialValues = {username:"", email:"", password:"", number:"", confirm_password:""};

  const [formValues , setFormValues] = useState(initialValues);
  const [formErrors , setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);

    const handleChange = (e) => {
      // console.log(e.target);
      // console.log(e.target.value);
      const {name , value} = e.target;
      setFormValues({...formValues , [name]: value});
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validateForm(formValues));
      setIsSubmit(true);
    };

    useEffect(() => {
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
      }
    }, [formErrors])

    const validateForm = (formValues) => {
      const errors = {}
      const regex_email =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!formValues.username) {
        errors.username = 'Username is required!';
      }
      if(!formValues.email) {
        errors.email = 'Email is required!';
      }
      else if(!formValues.email.match(regex_email)){
        errors.email = 'Enter a valid emailID';
      }
      if(!formValues.password) {
        errors.password = 'Password is required!';
      }
      else if(formValues.password.length < 4){
        errors.password = 'Password must be greater than 4 characters';
      }
      if(!(formValues.password === formValues.confirm_password)) {
        errors.confirm_password = 'Password not confirmed!';
      }
      if(!formValues.number) {
        errors.number = 'Contact number is required!';
      }
      // console.log(errors);
      return errors;
      
    };

  return (
    <Grid align="center">
      <pre> {JSON.stringify(formValues)} </pre>
      <form >
      
      <Paper elevation={10} style={paperStyle}>
        <Grid >

          <Avatar style={avatarStyle}>
            <AddCircleOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          

          <TextField
            id="outlined-basic"
            label="Name"
            name='username'
            placeholder="Enter Name"
            variant="outlined"
            fullWidth
            required
            style={textFieldStyle}
            onChange={handleChange}
            value={formValues.username}
          />
          <p style={errorStyle}>{formErrors.username}</p>
          <TextField
            id="outlined-basic signupmail"
            label="Email"
            name='email'
            placeholder="Enter Email"
            variant="outlined"
            type="email"
            fullWidth
            required
            style={textFieldStyle}
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={errorStyle} >{formErrors.email}</p>

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
          name='number'
          style={numberStyle}
          InputLabelProps={{
            shrink: true,
          }}
          value={formValues.number}
          onChange={handleChange}
        />
        <p style={errorStyle}>{formErrors.number}</p>

<TextField
            id="outlined-basic"
            label="Password"
            name='password'
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            style={textFieldStyle}
            value={formValues.password}
            onChange={handleChange}
          />
          <p style={errorStyle}>{formErrors.password}</p>

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
            name='confirm_password'
            type="password"
            variant="outlined"
            fullWidth
            required
            value={formValues.confirm_password}
            onChange={handleChange}
            style={textFieldStyle}
          />
          <p style={errorStyle}>{formErrors.confirm_password}</p>


          <Button
            variant="contained"
            color="success"
            style={btnStyle}
            onClick={handleSubmit}
            fullWidth
          >
            SIGN UP
          </Button>
        </Grid>
      </Paper>
      </form>
    </Grid>
  )
}
export default Signup;
