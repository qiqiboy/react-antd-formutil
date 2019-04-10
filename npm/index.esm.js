if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-antd-formutil.esm.production.js');
} else {
    module.exports = require('./react-antd-formutil.esm.development.js');
}
