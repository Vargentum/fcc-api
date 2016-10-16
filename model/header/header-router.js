const controller = require('./header-controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .get((...args) => controller.showUseragentData(...args))


module.exports = router;
