const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

// Matches with "/api/Users"
router
  .route("/")
  .post(UsersController.create);

// Matches with "/api/Users/:email"
router
  .route("/:id")
  .get(UsersController.findOne)
  .put(UsersController.update)
  .delete(UsersController.remove);

module.exports = router;
