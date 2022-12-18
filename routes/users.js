var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  const body = req.body
  console.log(body.username, '-----');
  res.send({
    code: 200,
    msg: '成功'
  });
});

module.exports = router;
