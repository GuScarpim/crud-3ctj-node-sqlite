const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users', usersController.getUsers);
router.get('/users', usersController.createUsers);

module.exports = router;