const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUsers);
router.put('/users/:id', usersController.updateUsers);
router.delete('/users/:id', usersController.deleteUsers);

module.exports = router;