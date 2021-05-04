const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

// Matches with "/api/User"
router
  .route("/")
  .post(UsersController.create);

// Matches with "/api/User/:email"
router
  .route("/:email")
  .get(UsersController.findOne)
  .put(UsersController.update)
  .delete(UsersController.remove);

module.exports = router;
