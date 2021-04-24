const db = require("../models");

// Defining methods for the PostsController
module.exports = {
  findAll: function(req, res) {
    db.Post.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post.findOne({id: req.params.id})
      .then(dbModel => res.json(dbModel))
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
  findByCat: function(req, res) {
    db.Post.find({category: req.params.cat})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findUserPost: function(req, res) {
    db.Post.find({created_by: req.params.user})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserPostByCat: function(req, res) {
    db.Post.find({created_by: req.params.user, category: req.params.cat})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Post.create(req.body)
      .then(dbModel => res.json(dbModel))
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
