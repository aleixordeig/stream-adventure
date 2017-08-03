var split = require('split')
var through2 = require('through2')
var counter = 1

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
      var lost = ''
      if (counter % 2 === 0) {
      	lost = line.toString().toUpperCase()
      } else {
        lost = line.toString().toLowerCase()
   	  }
   	  this.push(lost + '\n')
   	  counter++
      next()
    }))
    .pipe(process.stdout)
