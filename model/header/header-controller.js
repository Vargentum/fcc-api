const Controller = require('../../lib/controller');
const headerModel  = require('./timestamp-facade');


class HeaderController extends Controller {
  constructor(props) {
    super(props);
  }
}

module.exports = new HeaderController(headerModel);
