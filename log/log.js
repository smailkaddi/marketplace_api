const winston = require('winston');
require('winston-mongodb');

const levels= {
  error: 0,
  warn: 1,
  info: 2,
  debug: 4
}

const logWinston = winston.createLogger({
    levels : levels,
    format : winston.format.json(),
    defaultMera : {service : 'user-service'},
    transports : [
        new winston.transports.File(
            {
                filename : 'sysLog.log',
                format : winston.format.combine(winston.format.timestamp(),winston.format.json())
            }
        ),
        new winston.transports.MongoDB({
            db : 'mongodb://localhost:27017/MarketPlace',
            Option : {userUnifiedTopology : true}
        }),
    ],
});

module.exports = logWinston;