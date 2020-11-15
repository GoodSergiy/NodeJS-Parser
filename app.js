console.log('----------main app----------')

const unzip = require('./unzip.js')
const csv = require('./CSVtoJSON')

unzip.renameall();
unzip.unzip();
unzip.tempdel();
csv.cjs();