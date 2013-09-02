// simple stupid script for converting the svg to JSON string

var fs = require('fs')

var m = fs.readFileSync('businessreply.svg').toString()

console.log(JSON.stringify(m))