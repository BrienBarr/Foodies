import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import API from "../utils/API"
import Grid from '@material-ui/core/Grid';

const Post = () => {
    
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getPosts()
      .then((res) => {

        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h2>Posts</h2>
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
 export default Post;