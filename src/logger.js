const winston = require('winston');
const { combine, timestamp, prettyPrint } = winston.format;

const path = require('path');
const { loggers } = require('winston');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') })

winston.configure({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console({
            level: process.env.UVS_LOG_LEVEL || 'info',
        }),
    ],
});

module.exports = winston;
