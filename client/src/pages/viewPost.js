import React, { useState, useEffect } from 'react';
import SinglePostCard from '../components/SinglePostCard';
import RecipeCard from '../components/RecipeCard';
import RestaurantCard from '../components/RestaurantCard';
import API from "../utils/API";
import { useParams } from "react-router";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));

const viewPost = () => {
    
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const classes = useStyles();

  useEffect(() => {
    console.log(id);
    API.getPost(id)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderFields = (category) => {
    switch (category){
      case "restaurant":
        return <RestaurantCard key={post._id} data={post} />;
      case "recipe":
        return <RecipeCard key={post._id} data={post} />;
      default: 
        return <RestaurantCard key={post._id} data={post} />;
    }
  }

    return (
        <div>
          <Grid>
            <Grid className={classes.title} item xs={12}>
              <h2>View Post</h2>
            </Grid>
          </Grid>
          {renderFields(post.category)}
          {/* <SinglePostCard
            key = {post._id}
            data={post} 
          />         */}
        </div>
    )
}

 export default viewPost;