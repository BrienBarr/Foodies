const router = require("express").Router();
const postsController = require("../../controllers/PostControlller");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

// Matches with "/api/posts/:cat"
router
  .route("/:cat")
  .get(postsController.findByCat);

// Matches with "/api/posts/:user"
router
.route("/:user")
.get(postsController.findUserPost);

// Matches with "/api/posts/:user/:cat"
router
  .route("/:user/:cat")
  .get(postsController.findUserPostByCat);

// Matches with "/api/posts/:id/:likes"
router
  .route("/:id/:likes")
  .get(postsController.findLikes);

// Matches with "/api/posts/:id/:likes"
router
  .route("/:id/:comments")
  .get(postsController.findComments);

module.exports = router;
