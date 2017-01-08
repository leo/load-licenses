# load-licenses

[![Build Status](https://travis-ci.org/zeit/load-licenses.svg?branch=master)](https://travis-ci.org/zeit/load-licenses)

Retrieve the licenses for your project's dependencies:

## Usage

```js
import licenses from 'load-licenses'

licenses(process.mainModule)
```

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of load-licenses, just link it to the dependencies: `npm link load-licenses`. Instead of the default one from npm, node will now use your clone of the package!

## Author

Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [▲ZEIT](https://zeit.co)
