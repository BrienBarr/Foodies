import axios from 'axios';

// create login api routes for post 

export default {
  createUser: function(userdata) {
    return axios.post("/api/Users", userdata);
  },

  getUser: function(email) {
    return axios.get("/api/User/" + email)
  },
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/post");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/post/" + id); ///api/post/:id
  },
  getUserPost: function(email) {
    return axios.get("/api/post/" + email); ///api/post/:email 
  },                                         // added to take care of the get post by user route
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/post", postData);
  }
};