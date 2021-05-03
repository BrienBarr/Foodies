import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 200
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
}));

export default function PostCard({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // console.log(data);
  return (

    <Card className={classes.root}>
      <CardHeader
        title={data.created_by.userName}
        // title="Jack Tussing"
        subheader={data.date}
        // subheader= "today"
         />
      <CardHeader
        title={data.title}
        // title= "sloppyjoes"
      />
      <CardMedia
        className={classes.media}
        component="img"
        image={data.imageURL}
        alt={data.title}
        title={data.title}
      />
      <CardContent>
      <CardHeader
        title="Description"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
          {/* "lalalalalala" */}
        </Typography>
        <CardHeader
        title="Ingredients"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.ingredients}
          {/* Ingredients */}
        </Typography>
        <CardHeader
        title="Directions"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.directions}
          {/* directions */}
        </Typography>
      </CardContent>
      </div>
    }
    else{
      <div>
      <CardContent>
      <CardHeader
        title="address"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.address}

        </Typography>
        <CardHeader
        title="review"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.review}

        </Typography>
        <CardHeader
        title="link"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.link}
        </Typography>
      </CardContent>
      </div>
    }
  }
     return (

      <Card className={classes.root}>
        <CardHeader
          title={data.created_by}
  
          subheader={data.date}
  
           />
        <CardHeader
          title={data.title}
        />
        <CardMedia
          className={classes.media}
          component="img"
          image={data.imageURL}
          alt={data.title}
          title={data.title}
        />
        <CardContent>
        { renderFields(category) }
        </CardContent>
      </Card>
  );
}
