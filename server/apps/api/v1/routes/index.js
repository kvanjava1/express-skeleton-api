import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).json({
    "status" : "ok",
    'url' : req.protocol + '://' + req.get('host') + req.originalUrl
  });
});

router.get('/test-view', function(req, res, next) {
  return res.render('api/v1/resources/views/layout');
});

module.exports = router;
