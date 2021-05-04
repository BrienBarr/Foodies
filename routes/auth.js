const express = require("express");
const router = express.Router();

const { signup, signin, logout } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', signin);
router.post('/logout', logout);

module.exports = router;