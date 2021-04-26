import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImageAvatars from '../ImageAvatars';
import { People } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ImageAvatars />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            User's Name
          </Typography>
          <Typography>User's Foodies username</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            User headline
          </Typography>
          
        </CardContent>
      </CardActionArea>
      {/* <CardActions> */}
        {/* Link to see user's friends */}
        {/* <Button size="small" color="primary"> */}
          {/* <PeopleIcon /> */}
        {/* </Button> */}
        {/* Link to add user as friend */}
        {/* <Button size="small" color="primary"> */}
          {/* <PersonAddIcon /> */}
        {/* </Button> */}
      {/* </CardActions> */}
    </Card>
  );
}
