var router = require('../router');

router.get('/webhooks/create', function (req, res, next) {
  const { url } = req.query;
  if (!url) {
    res.status(400).send('url is required');
  } else {
    res.send(url);
  }
});

router.get('/webhooks/', function (req, res, next) {
  res.send('respond with a resource');
});
