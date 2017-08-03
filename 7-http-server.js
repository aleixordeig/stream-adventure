var http = require('http')
var through = require('through2')
var port = process.argv[2]
var server = http.createServer()

var stream = through(function (chunk, _, next) {
  chunk = chunk.toString().toUpperCase()
  this.push(chunk)
  next()
})
server.on('request', function (req, res) {
  req.pipe(stream).pipe(res)
}).listen(port)
