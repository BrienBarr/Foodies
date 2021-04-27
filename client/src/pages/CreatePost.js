// create post page shou;d be able to add a post as well as have links to home page as well as profile page

import React from 'react';
import Login from '../components/Login'
import PostForm from '../components/PostForm/';
import useToken from '../useToken';

const CreatePost = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />;
  }

    return (
        <div>
          <PostForm />
        </div>
    )
}
 export default CreatePost;