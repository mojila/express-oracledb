const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'selamat datang',
    author: 'Aji (01) Nuril (27)'
  });
});

module.exports = router;