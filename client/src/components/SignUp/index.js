// create sign form for import into authentication page
import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright';
import API from '../../utils/API';

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

// const classes = useStyles();

class SignUp extends Component {
  // function SignUp (){
  
  constructor(props){
    super(props);

    this.state = {
      uName: "",
      fName: "",
      lName: "",
      email: "",
      pass: ""
    }

<<<<<<< HEAD
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const UserNameRef = useRef();

  const handleSubmit = () => {

=======
    // this.classes = this.classes.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
>>>>>>> BB2
  }

  // classes = useStyles();

  signupUser = e => {
    e.preventDefault();
    let userdata = {
      userName: this.state.uName,
      first_name: this.state.fName,
      last_name: this.state.lName,
      email: this.state.email,
      password: this.state.pass
    }
    API.createUser(userdata)
    // .then((res) => {
    //   res.redirect("/");
    // })
  }

  handleInputChange = e => {
    switch (e.target.id) {
      case "userName": 
        this.setState({uName: e.target.value});
        break;
      case "firstName": 
        this.setState({fName: e.target.value});
        break;
      case "lastName": 
        this.setState({lName: e.target.value});
        break;
      case "email": 
        this.setState({email: e.target.value});
        break;
      case "password": 
        this.setState({pass: e.target.value});
        break;
      default:
        return;
    }
  }

  render(){
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
          <form style={styles.form} onSubmit={this.signupUser}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
<<<<<<< HEAD
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                ref={lNameRef}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="UserName"
                label="UserName"
                name="userName"
                ref={UserNameRef}
                autoComplete="UserName"
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
                ref={emailRef}
                autoComplete="email"
              />
=======
                <TextField
                  autoComplete="userName"
                  name="userName"
                  value={this.state.uName}
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  autoFocus
                  onChange = {this.handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  value={this.state.fName}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange = {this.handleInputChange}
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
                  value={this.state.lName}
                  autoComplete="lname"
                  onChange = {this.handleInputChange}
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
                  value={this.state.email}
                  autoComplete="email"
                  onChange = {this.handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={this.state.pass}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange = {this.handleInputChange}
                />
              </Grid>
>>>>>>> BB2
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
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
<<<<<<< HEAD
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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
}
=======
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default SignUp;
>>>>>>> BB2
