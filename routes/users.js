var express = require('express');
var router = express.Router();
const databases = require('../databases/databases')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  // console.log();
  const getSql = 'select * from students where not is_delete;'
  databases.query(getSql, (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    res.send({
      code: 200,
      msg: '成功',
      data: {
        data
      }
    });
  })
});

module.exports = router;
