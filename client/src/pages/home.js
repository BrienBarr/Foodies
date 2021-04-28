import React, { useState, useEffect } from 'react';
import Login from '../components/Login'
import PostCard from '../components/PostCard';
import API from "../utils/API"
import Grid from '@material-ui/core/Grid';
import useToken from "../useToken";

function Home(){
  console.log('home');
  const { token } = useToken();

  console.log(token);
  if(!token) {
    return <Login />;
  }
  
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    // console.log(token.data.message.email);
    API.getUserPost(token.data.message.email) // i think this is correct
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
                <PostCard
                  key = {post._id}
                  data={post} />
            );
          })
          }
           
           
        </div>
    )
}
 export default Home;