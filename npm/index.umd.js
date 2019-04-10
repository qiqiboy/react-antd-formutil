if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-antd-formutil.umd.production.js');
} else {
    module.exports = require('./react-antd-formutil.umd.development.js');
}

