import React, { useState, useEffect } from 'react';
import SinglePostCard from '../components/SinglePostCard';
import API from "../utils/API";
import { useParams } from "react-router";

const viewPost = () => {
    
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // console.log("api called")
    API.getPost(id)
      .then((res) => {

        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <h2>View</h2>
                <SinglePostCard
                  key = {post.id}
                  data={post} 
                  />        
           
        </div>
    )
}
 export default viewPost;