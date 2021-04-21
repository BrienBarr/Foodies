import React from 'react';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {' '}
        Developed by: Brien Barr, Dan Bohn, Jack Tussing, & Kanasia Hursey
        {'.'}
      </Typography>
  );
}

export default Copyright;