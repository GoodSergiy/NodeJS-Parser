console.log('----------main app----------')

// const zip = require('decompress')
// const fs = require('fs')
// const path = require('path')
// const del = require("rimraf")
const unzip = require('./unzip.js')
const csv = require('./CSVtoJSON')

unzip.renameall();
unzip.unzip();
unzip.tempdel();
csv.cjs();