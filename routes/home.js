const express = require('express');
const router = express.Router();

// Initial page load
router.get('/', async (req, res) => {
    res.render('home');
});

module.exports = router;