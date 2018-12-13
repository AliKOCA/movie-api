const express = require('express');
const router = express.Router();

/* GET movie listing. */
router.get('/', (req, res, next) => {
    res.json({ status: 1 });
});

module.exports = router;
