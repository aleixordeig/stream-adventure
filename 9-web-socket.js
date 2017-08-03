var ws = require('websocket-stream')
var stream = ws('ws://localhost:8099')

stream.end('hello\n')

// for check the exercic it must be named bundle.js
