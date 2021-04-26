import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import API from "../utils/API"
import Grid from '@material-ui/core/Grid';

const View = () => {
    
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getPosts() // need to deside how we are collecting the user id
      .then((res) => {

        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div>
          <h2>Home</h2>
          { posts && posts.map( (post) => {
            return ( 
              <Grid container direction="row" spacing={3}>
              <Grid item xs={3}>
                <PostCard
                  key = {post.id}
                  data={post} />
              </Grid>
              </Grid>
            );
          })
          }
           
           
        </div>
    )
}
 export default View;