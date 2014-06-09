# spawn-local-bin [![NPM version](https://badge.fury.io/js/spawn-local-bin.svg)](http://badge.fury.io/js/spawn-local-bin)

> Yet another spawn wrapper (that works on [Windows](https://www.youtube.com/watch?v=vu0TMtgx1pE)).

## Install

```sh
$ npm install spawn-local-bin
```

## Usage

### [`spawn()`](https://github.com/zenorocha/spawn-local-bin/blob/master/index.js#L4)

A [child_process.spawn](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) wrapper that inherits `stdio`.

```js
var spawn = require('spawn-local-bin');

var cmd = 'ls';
var args = ['~/', '-la'];
var cwd = process.cwd();

spawn(cmd, args, cwd);
```

### [`spawn.path()`](https://github.com/zenorocha/spawn-local-bin/blob/master/index.js#L18)

Adds all local bin's (located under `node_modules/.bin`) to the [process.env](http://nodejs.org/api/process.html#process_process_env) PATH.

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