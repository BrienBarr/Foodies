import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImageAvatars from '../ImageAvatars';
import { People } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '65ch',
    },
  },
  textField: {
    width: '65ch',
    marginBottom: '20px'
  }
}));

export default function PostForm() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Create a Post"
      />
      <CardActionArea>
        <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              className={classes.textField}
              required
              id="outlined-required"
              label="Title"
              defaultValue="Enter a title..."
              variant="outlined"
            />
            <br/>
            <Typography>Field to insert image...</Typography>
            <br/>
            <TextField
              className={classes.textField}
              required
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              defaultValue="What do you want to say..."
              variant="outlined"
            />
            <br/>
            <TextField
              className={classes.textField}
              id="outlined-required"
              label="Link"
              defaultValue="Enter a url..."
              variant="outlined"
            />
          </div>
        </form>  
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
