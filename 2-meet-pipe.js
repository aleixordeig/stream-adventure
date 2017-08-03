var url = process.argv[2]
var fs = require('fs')
fs.createReadStream(url).pipe(process.stdout)
