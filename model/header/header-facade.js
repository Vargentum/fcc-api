const Model = require('../../lib/facade');
const headerSchema  = require('./header-schema');


class HeaderModel extends Model {}

module.exports = new HeaderModel(headerSchema);
