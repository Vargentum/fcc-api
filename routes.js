const Router = require('express').Router;
const router = new Router();

const timestamp  = require('./model/timestamp/timestamp-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to fcc-api API!' });
});

router.use('/timestamp', timestamp);


module.exports = router;
