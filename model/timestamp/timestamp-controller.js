const moment = require('moment')
const Controller = require('../../lib/controller');
const timestampModel  = require('./timestamp-facade');


class TimestampController extends Controller {
  constructor(props) {
    super(props);
  }
  parse(ts) {
    return !!Number(ts)
  }
  _parseTimestamp(rawTimestamp) {
    const unixTimestamp = moment.unix(Number(rawTimestamp))
    const readableTimestamp = moment(rawTimestamp)

    if (unixTimestamp.isValid()) {
      this.timestamp = {
        readable: unixTimestamp.format('dddd, MMMM Do YYYY'),
        unix: unixTimestamp.unix()
      }
    } else if (readableTimestamp.isValid()) {
      this.timestamp = {
        readable: readableTimestamp.format('dddd, MMMM Do YYYY'),
        unix: readableTimestamp.unix()
      }
    } else {
      this.timestampError = new Error(`invalid timestamp ${rawTimestamp}`)
    }
  }
  echo(req, res, next) {
    this._parseTimestamp(req.params.id)
    if (this.timestampError) next(this.timestampError)
    res.json(this.timestamp)
  }
  help(req, res, next) {
    res.send(`Provide timestamp to URL:
      Works with human readable dates, like "December 15, 2015"
      and  and unix timestamps, like "1450137600"`)
  }
}

module.exports = new TimestampController(timestampModel);
