const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

// Read CSV

const results = [];

fs.createReadStream('./CSV/users-test.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });








// Wright to JSON ###### - This part works well

// fs.writeFile('./OutputJSON/data.json', JSON.stringify(data), (err) => {
//     if (err) console.log('WRONG :(')
// })