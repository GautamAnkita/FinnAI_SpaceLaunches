let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Welcome");
  res.status(200).json();
});

module.exports = router;
