// Material-UI
// v4.11.1
// Diamond Sponsors
// octopus
// doit-intl
// Avatar
// Avatars are found throughout material design with uses in everything from tables to dialog menus.
// Help us keep running
// If you don't mind tech related ads (no tracking or remarketing), and want to keep us running, please whitelist Material-UI in your blocker.
// Thank you! 
// ❤️

// Image avatars
// Image avatars can be created by passing standard img props src or srcSet to the component.

// <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
// <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
// <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
// Letter avatars
// Avatars containing simple characters can be created by passing a string as children.

// <Avatar>H</Avatar>
// <Avatar className={classes.orange}>N</Avatar>
// <Avatar className={classes.purple}>OP</Avatar>
// Sizes
// You can change the size of the avatar with the height and width CSS properties.

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.purple, classes.large}>U</Avatar>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} /> */}
    </div>
  );
}