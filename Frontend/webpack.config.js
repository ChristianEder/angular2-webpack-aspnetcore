
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./build/webpack.prod.config');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./build/webpack.dev.config');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./build/webpack.dev.config');
}