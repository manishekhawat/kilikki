let path = require('path');

module.exports = {
    entry: './dist/kilikki.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'kilikki.js'
    },
    node: {
        fs: 'empty'
    }
};
