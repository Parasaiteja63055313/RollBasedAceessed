const express = require('express');
const { getAdminData } = require('../controllers/adminController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/data', verifyToken, isAdmin, getAdminData);

module.exports = router;
