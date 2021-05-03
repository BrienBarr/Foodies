import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
// import useToken from '../../useToken';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 200
  },
  media: {
    // height: 0,
    paddingTop: '60%', // 16:9
    paddingLeft: '60%',
    marginLeft: 10,
    width: 175,
    maxWidth: 175
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard({ data }) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();
  // const {token} = useToken();
  const handleRedirect = () => {
    console.log("button clicked")
      history.push(`/view/${data._id}`);
}

  return (
    <Grid item xs={3}>
    <Card className={classes.root}>
      <CardHeader 
      title={data.created_by.userName}
      />
            <CardHeader 
      title={data.category}
      />
      <CardHeader
        title={data.title}
        subheader={data.date}
      />
      <CardMedia
        className={classes.media}
        image={data.imageURL}// issues getting image to show up
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
        <Button onClick={handleRedirect}>
          More
        </Button>
      </CardContent>
    </Card>
    </Grid>
  );
}
