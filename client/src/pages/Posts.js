import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import API from "../utils/API"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));

const Post = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div>
          <Grid>
            <Grid className={classes.title} item xs={12}>
              <h2>Posts</h2>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
          { posts && posts.map( (post) => {
            console.log("Posts: " + JSON.stringify(post))
            return ( 
                <PostCard
                  key = {post._id}
                  data={post} />
            );

          })
          }
          </Grid>
           
           
        </div>
    )
}
 export default Post;