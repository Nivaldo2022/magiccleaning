//config.js
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 8000,
    USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || 'clean',
  }
