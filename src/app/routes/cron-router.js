const express = require('express');
const router = express.Router();
const { cronController } = require('../controllers');

router.post('/cron', (req, res) => {
    const finalResult = cronController(req.body.expression);

    res.send(finalResult);
});

module.exports = router;

