// create sign form for import into authentication page
import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright';
import API from '../../utils/API';
import useToken from '../../useToken';
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const classes = useStyles();

const styles = {
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
}



function SignUp (){
  
  const [user, setUser] = useState({});
  const { setToken } = useToken(); 
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    let userdata = {
      userName: user.uName,
      first_name: user.fName,
      last_name: user.lName,
      email: user.email,
      password: user.pass,
      password_confirmation: user.confirm
    };
    API.createUser(userdata)
    .then( (res) => {
      //console.log(res);
      const udata = res.data;
      setToken(udata);
      // history.push("/");
      window.location.href = "/";
    })
  };

  const handleInputChange = e => {
    switch (e.target.id) {
      case "userName": 
        setUser({ ...user, uName: e.target.value});
        break;
      case "firstName": 
        setUser({ ...user, fName: e.target.value});
        break;
      case "lastName": 
        setUser({ ...user, lName: e.target.value});
        break;
      case "email": 
        setUser({ ...user, email: e.target.value});
        break;
      case "password": 
        setUser({ ...user, pass: e.target.value});
        break;
      case "confirm": 
        setUser({ ...user, confirm: e.target.value});
        break;
      default:
        return;
    }
  }

  // render(){
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={styles.paper}>
        <Typography variant="h3" align="center">Foodies</Typography>
          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form styles={styles.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                  <TextField
                    autoComplete="uName"
                    name="userName"
                    // ref={fNameRef}
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="Username"
                    autoFocus
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  // ref={fNameRef}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  // ref={lNameRef}
                  autoComplete="lname"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  // ref={emailRef}
                  autoComplete="email"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  // ref={passRef}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPass"
                  // ref={confirmRef}
                  label="Confirm Password"
                  type="password"
                  id="confirm"
                  autoComplete="confirm-password"
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  // }
}

export default SignUp;