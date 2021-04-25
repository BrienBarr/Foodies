import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import API from "../utils/API"

function Home(){
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getPost() 
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