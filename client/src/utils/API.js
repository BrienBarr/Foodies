import axios from 'axios';

// create login api routes for post 

export default {
  createUser: function(userdata) {
    return axios.post("/api/Users", userdata);
  },
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/post");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/post/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/post", postData);
  }
};