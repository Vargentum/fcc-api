const Model = require('../../lib/facade');
const timestampSchema  = require('./timestamp-schema');


class TimestampModel extends Model {}

module.exports = new TimestampModel(timestampSchema);
