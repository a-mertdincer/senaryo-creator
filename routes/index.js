const express = require('express');
const router = express.Router();

// Ana sayfa rotası
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
