
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: "./src/scripts/index.js",
    output: {
        filename: "/scripts/bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
}