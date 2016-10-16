const Model = require('../../lib/facade');
const headerSchema  = require('./timestamp-schema');


class HeaderModel extends Model {}

module.exports = new HeaderModel(headerSchema);
