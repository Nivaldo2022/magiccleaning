const  config  = require('../config');
module.exports = {
    database: {
        host: config.PORT,
        user: config.USER,
        pass: config.DB_PASSWORD,
        database: config.DB_NAME
    }
};