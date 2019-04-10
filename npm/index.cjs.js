if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-antd-formutil.cjs.production.js');
} else {
    module.exports = require('./react-antd-formutil.cjs.development.js');
}
