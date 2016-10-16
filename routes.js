const Router = require('express').Router;
const router = new Router();

const timestamp  = require('./model/timestamp/timestamp-router');
const header  = require('./model/header/header-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to fcc-api API!' });
});

router.use('/timestamp', timestamp);
router.use('/header', header);


module.exports = router;
