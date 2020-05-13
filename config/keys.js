const LIVE = false;

if (LIVE) {
    module.exports = require('./prod.js');
} else {
    module.exports = require('./dev.js');
}
