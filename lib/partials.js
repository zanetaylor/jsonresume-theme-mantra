var fs = require('fs');
var path = require('path');

var inlineFile = function(relativePath) {
    var fullPath = path.join(__dirname, relativePath);
    return fs.readFileSync(fullPath, 'utf-8');
};

module.exports = {
    css: inlineFile('/style.css'),
    // javascript: inlineFile('../dist/bundle.js')
};
