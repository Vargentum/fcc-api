const controller = require('./timestamp-controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .get((...args) => controller.help(...args))

router.route('/:id')
  .get((...args) => controller.echo(...args))


module.exports = router;
