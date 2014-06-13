var path  = require('path');
var spawn = require('child_process').spawn;

var isWindows = process.platform.match(/^win/);

module.exports = function(cmd, args, cwd) {
    this.args = args || [];
    this.cmd  = cmd || '';
    this.cwd  = cwd || process.cwd();

    // Append the .cmd extension to the command call on Windows
    if (cmd && isWindows) {
        this.cmd = this.cmd + '.cmd';
    }

    return spawn(this.cmd, this.args, {
        cwd: this.cwd,
        stdio: 'inherit'
    });
};

module.exports.path = function(dir) {
    this.dir = dir || process.cwd();

    // Add the node_modules/.bin directory to the PATH
    var PATH_SEPARATOR = isWindows ? ';' : ':';
    process.env.PATH = path.join(dir, 'node_modules', '.bin') + PATH_SEPARATOR + process.env.PATH;
};
