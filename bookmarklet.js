// simple stupid script for converting the js to bookmarklet

var fs = require('fs')

var m = fs.readFileSync('business-reply-mail.js').toString()

console.log(encodeURIComponent(m))