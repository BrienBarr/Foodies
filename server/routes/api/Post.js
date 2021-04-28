const router = require("express").Router();
const postsController = require("../../controllers/PostControlller");

// Matches with "/api/post"
router
  .route("/")
  .get(postsController.findAll)
  .post(postsController.create);

//   // Matches with "/api/post/email"
router
  .route("/:email")
.get(postsController.findAllWhere)

// Matches with "/api/post/:id"
router
  .route("/:id")
  .get(postsController.findById)

  .put(postsController.update)
  .delete(postsController.remove);

// // Matches with "/api/post/:cat"
// router
//   .route("/:cat")
//   .get(postsController.findByCat);

// // Matches with "/api/post/:user"
// router
// .route("/:user")
// .get(postsController.findUserPost);

// // Matches with "/api/post/:user/:cat"
// router
//   .route("/:user/:cat")
//   .get(postsController.findUserPostByCat);

// Matches with "/api/post/:id/:likes"
router
  .route("/likes/:id")
  .get(postsController.findLikes);

// Matches with "/api/post/:id/:likes"
router
  .route("/comments/:id")
  .get(postsController.findComments);

module.exports = router;
