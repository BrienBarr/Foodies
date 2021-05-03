const db = require("../models");



// Defining methods for the PostsController
module.exports = {
  // findAll: function(req, res) {
  //   db.Post.find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findAll: function(req, res) {
    db.Post.find({})
      .populate("created_by")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllWhere: function(req, res) {
    // console.log(req.params.user);
    db.Post.find({created_by: req.params.user})
      .populate("created_by")
      .sort({ date: -1 })
      // .populate({path: "created_by"})
      .then(dbModel => {
        console.log(dbModel);
        console.log(dbModel.created_by);
        // console.log(dbModel.created_by.userName);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("find by id");
    db.Post.findOne({_id: req.params.id})
      .populate("created_by")
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findLikes: function(req, res) {
    db.Post.findOne({id: req.params.id})
      .then(dbModel => res.json(dbModel.likes))
      .catch(err => res.status(422).json(err));
  },
  findComments: function(req, res) {
    db.Post.findOne({id: req.params.id})
      .then(dbModel => res.json(dbModel.comments))
      .catch(err => res.status(422).json(err));
  },
  // findByCat: function(req, res) {
  //   let cat = req.query.cat;
  //   db.Post.find({category: cat})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  
  // findUserPost: function(req, res) {
  //   db.Post.find({created_by: req.params.user})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findUserPostByCat: function(req, res) {
  //   db.Post.find({created_by: req.params.user, category: req.params.cat})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Post.create(req.body)
      
      .then(post => {
        console.log("Created BY: " + post.created_by);
        // db.User.find({_id: post.created_by}).posts.push(post);
      })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
