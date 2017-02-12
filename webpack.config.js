
const path = require('path');

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        filename: "/scripts/bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
}