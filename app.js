console.log('----------main app----------')

const unzip = require('./modules/unzip.js')
const csv = require('./modules/CSVtoJSON')

unzip.renameall();
unzip.unzip();
unzip.tempdel();
csv.cjs();