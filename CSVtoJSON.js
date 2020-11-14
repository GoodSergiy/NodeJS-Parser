const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const es = require('event-stream')

// Read CSV and Write to the JSON

const results = [];

fs.createReadStream('./CSV/users-test.csv')
    .pipe(es.split())             // line by line
    .pipe(es.replace('||','|')    // turn || into |
    .pipe(csv({separator: '|'}))  // handle CSV with | separator
    .on('data', (data) => results.push(data))
    .on('end', () => {      
      console.log(results);
      fs.writeFileSync('./OutputJSON/data.json', JSON.stringify(results),'utf-8', (err) => {
          if (err) console.log('That is bad')
      })
  }))








// Wright to JSON ###### - This part works well

// fs.writeFile('./OutputJSON/data.json', JSON.stringify(data), (err) => {
//     if (err) console.log('WRONG :(')
// })