import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    minWidth: 200
  },
  media: {
    paddingLeft: 10,
    maxWidth: 500
  }
}));

export default function RecipeCard({ data }) {
  const classes = useStyles();
  console.log(data);
  if (data.length === 0){
    return <div />
  }
  return (

    <Card className={classes.root}>
      <CardHeader
        title={data.created_by.userName}
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
      <CardHeader
        title="Description"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
        <CardHeader
        title="Ingredients"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.ingredients}
        </Typography>
        <CardHeader
        title="Directions"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          {data.instructions}
        </Typography>
        <CardHeader
        title="Recipe Link"
         />
        <Typography variant="body2" color="textSecondary" component="p">
          <a href={data.link} target="_blank">{data.link}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
