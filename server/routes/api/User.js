const router = require("express").Router();
const UsersController = require("../../controllers/UserController");

// Matches with "/api/Users"
router
  .route("/")
  .post(UsersController.create);

// Matches with "/api/Users/:id"
router
  .route("/:id")
  .get(UsersController.findById)
  .put(UsersController.update)
  .delete(UsersController.remove);

module.exports = router;
