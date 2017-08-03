  var trumpet = require('trumpet')
  var through = require('through2')
  var tr = trumpet()
  var loud = tr.select('loud').createStream()
  loud.pipe(through(function(data){
  	this.push(data.toString().toUpperCase())
  })).pipe(loud)


process.stdin.pipe(tr).pipe(process.stdout)