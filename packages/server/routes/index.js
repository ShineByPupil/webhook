var router = require('../router');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

require('./users');
require('./webhooks');

module.exports = router;
