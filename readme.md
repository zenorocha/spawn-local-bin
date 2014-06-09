# spawn-local-bin [![NPM version](https://badge.fury.io/js/spawn-local-bin.svg)](http://badge.fury.io/js/spawn-local-bin)

> A [child_process.spawn](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) wrapper that inherits `stdio` and adds local bin's (`node_modules/.bin`) to the [process.env](http://nodejs.org/api/process.html#process_process_env) PATH.

## Install

```sh
$ npm install spawn-local-bin
```

## Usage

### `spawn()`

```js
var spawn = require('spawn-local-bin');

var cmd = 'ls';
var args = ['~/', '-la'];
var cwd = process.cwd();

spawn(cmd, args, cwd);
```

### `spawn.path()`

```js
var spawn = require('spawn-local-bin');

var dir = __dirname;

spawn.path(dir);
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/zenorocha/spawn-local-bin/releases).

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha