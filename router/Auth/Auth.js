const { Router } = require('express');
const router = Router();

// import controller
const authController = require('../../controller/Auth/authRoute');

router.post("/login", authController.Login);

module.exports = router;