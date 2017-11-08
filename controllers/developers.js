const express = require('express');
const oracledb = require('oracledb');

// Functions
const router = express.Router();

// DB Config
const dbconfig = require('../env/dbconfig');

// Model
const developers = require('../models/developers');

// DB Connection
const conn = oracledb.getConnection(dbconfig);

// Developer Routers
router.get('/', (req, res, next) => {
  res.json({
    message: 'End-point Developers'
  });
});

router.get('/all', (req, res, next) => {
  var query = conn.then((connection) => {
    return connection.execute(developers.getAll());
  });

  query.then((result) => {    
    var data = [];

    result.rows.forEach((v, i, a) => {
      data.push({ 
        "developer_id": a[i][0],
        "first_name": a[i][1],
        "last_name": a[i][2],
        "location": a[i][3],
        "bio": a[i][4],
        "username": a[i][5],
        "email": a[i][6],
        "password": a[i][7],
        "member_since": a[i][8]
      });
    }, this);
    res.json(data);
  });
});

module.exports = router;