var path = require('path');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args, cwd) {
    this.cwd = cwd || process.cwd();

    // Append the .cmd extension to the command call on Windows
    if (cmd && process.platform.match('/^win/')) {
        cmd = cmd + '.cmd';
    }

    return spawn(cmd, args, {
        cwd: this.cwd,
        stdio: 'inherit'
    });
};

module.exports.path = function(dir) {
    this.dir = dir || process.cwd();

    // Add the node_modules/.bin directory to the PATH
    var PATH_SEPARATOR = process.platform.match(/^win/) ? ';' : ':';
    process.env.PATH = path.join(dir, 'node_modules', '.bin') + PATH_SEPARATOR + process.env.PATH;
};