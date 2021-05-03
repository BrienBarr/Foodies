import axios from 'axios';

// create login api routes for post 

export default {
  createUser: function(userdata) {
    return axios.post("/signup", userdata);
  },
  login: function(userdata) {
    console.log(userdata);
    return axios.post("/login", userdata)
  },
  logout: function() {
    sessionStorage.clear("token");
    return axios.post("/logout");
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
    return axios.get("/api/post/post/" + id); ///api/post/:id
  },
  getUserPost: function(user) {
    console.log("User is: " + user)
    return axios.get("/api/post/" + user); ///api/post/:user added to take care of the get post by user route
  },  
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/post", postData);
  }
};