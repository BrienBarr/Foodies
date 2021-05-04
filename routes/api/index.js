const router = require("express").Router();
const postRoutes = require("./Post");
const UserRoutes = require("./User")

// Post routes
router.use("/post", postRoutes);

// User routes
router.use("/User", UserRoutes);

module.exports = router;
