const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const es = require('event-stream')
const rimraf = require("rimraf")

// Wright to JSON

function cjs(){
  fs.mkdir('OutputJSON', (err) => {
    if (err) console.log('OutputJSON exist')
  })
  
    setTimeout(() => {
      try {    
          const parse =  fs.readdirSync('./CSV')
          console.log(parse)    
          parse.forEach((file, i) => {
              console.log(file + ' ' + path.extname(file))
              let ext = path.extname(file)
              if (ext == '.csv'){
                const results = new Array();
                fs.createReadStream('./CSV/' + file)
                .pipe(es.split('"'))
                .pipe(csv({separator: '||'}))  // handle CSV with | separator
                .on('data', (data) => results.push(data))
                .on('end', () => {      
                  // console.log(results);
                  fs.writeFileSync('./OutputJSON/'+ file +'.json', JSON.stringify(results),'utf-8',console.log('---------'), (err) => {
                      if (err) console.log('That is bad')
                  })
                })
              } else {
                console.log(file + ' is not csv')
                console.log('------------')
              }
          })
      } catch (err) {
          console.log('NO')
      }
  },100)
  
// Delete unziped CSV

  setTimeout(() => {
    rimraf('./CSV', () => { console.log('CSV removed'); console.log('The process is DONE!') });    
  },500)
}

module.exports.cjs = cjs;