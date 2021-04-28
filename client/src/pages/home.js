import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import API from "../utils/API"
import Grid from '@material-ui/core/Grid';
import useToken from "../useToken";

function Home(){
  
  const [posts, setPosts] = useState([]);
  const {Token} = useToken();


  useEffect(() => {
    API.getUserPost(Token.message.email) // i think this is correct
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
                  key = {post.id}
                  data={post} />
            );
          })
          }
           
           
        </div>
    )
}
 export default Home;