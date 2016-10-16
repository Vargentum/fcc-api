const Controller = require('../../lib/controller');
const headerModel  = require('./header-facade');

const getPreferredLang = (req) => req.get('Accept-Language').split(',')[0]

class HeaderController extends Controller {
  constructor(props) {
    super(props);
  }
  showUseragentData(req, res, next) {
    res.json({
      ip: req.ip,
      os: req.useragent.os,
      lang: getPreferredLang(req)
    })
  }
}

module.exports = new HeaderController(headerModel);
