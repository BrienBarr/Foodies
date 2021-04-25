import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import API from "../utils/API"

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
            <PostCard
              key = {post.id}
              data={post} />
            );
          })
          }
           
           
        </div>
    )
}
 export default View;