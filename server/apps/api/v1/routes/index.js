import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api/v1/resources/views/layout');
});

module.exports = router;
