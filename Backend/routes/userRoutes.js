const express = require('express');
const { getAllUsers, getUserDetails } = require('../controllers/userController');
const {authenticateToken} = require('../middlewares/authMiddleware');
const { authorizeRoles} = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getUserDetails);
router.get('/getAllUsers', authenticateToken, authorizeRoles('Admin'), getAllUsers);

module.exports = router;
