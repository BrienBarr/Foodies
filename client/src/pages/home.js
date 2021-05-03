import React, { useState, useEffect } from 'react';
import Login from '../components/Login'
import PostCard from '../components/PostCard';
import API from '../utils/API'
import Grid from '@material-ui/core/Grid';
import useToken from '../useToken';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}));

function Home(){
  const { token } = useToken();
  const classes = useStyles();

  if(!token) {
    return <Login />;
  }
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getUserPost(token.data.message._id) // i think this is correct
      .then((res) => {
        console.log("response: " + JSON.stringify(res));
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if(posts.length === 0){
    return (
      <div>
          <Grid>
            <Grid className={classes.title} item xs={12}>
              <h2>Home</h2>
            </Grid>
            <Grid className={classes.title} item xs={12}>
              <h4>You have not created any posts yet.</h4>
            </Grid>
          </Grid>
        </div>
    )
  } else {
    return (
        <div>
          <Grid>
            <Grid className={classes.title} item xs={12}>
              <h2>Home</h2>
            </Grid>
          </Grid>
          { posts && posts.map( (post) => {
            return ( 
                <PostCard
                  key={post._id}
                  data={post} />
            );
          })
          }
        </div>
    )
  }
}

export default Home;