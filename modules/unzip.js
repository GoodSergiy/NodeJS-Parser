const zip = require('decompress')
const fs = require('fs')
const path = require('path')
const del = require("rimraf")

// Rename everything and put it to the temp folder

function renameall(){
    fs.mkdir('temp', (err) => {
        if (err) console.log('temp exist')
    })
    fs.mkdir('CSV', (err) => {
        if (err) console.log('CSV exist')
    })
    setTimeout(() => {
        try {    
            const data =  fs.readdirSync('./original_zips')
            // console.log(data)    
            data.forEach((file, i) => {
                console.log(file + ' ' + path.extname(file))
                let ext = path.extname(file)
                if (ext == '.zip'){
                    fs.copyFileSync('./original_zips/'+ file, './temp/'+ i + '.zip')
                    console.log('The copy has been made')
                    console.log('New name is ' + i + '.zip')
                    console.log('--------------------------')
                } else {
                    console.log('#######################################################')
                    console.log('OH NO! There is no ZIP file in the original_zips folder')
                    console.log('#######################################################')
                }
            })
        } catch (err) {
            console.log('NO')
        }
    },10)
}

// Unzip everything

function unzip(){
    setTimeout(() =>{
        try {
            const data = fs.readdirSync('./temp')
            // console.log(data);
            data.forEach(file => {
                zip('./temp/' + file, './CSV').then(files => {
                    data.forEach ((file, i) => {                
                        try {
                            fs.unlinkSync('./temp/'+ file, + i + '.zip', (err) => {
                                console.log('UnZiped')
                            })                           
                        } catch (error) {                    
                            console.log(file + i + ' Was UnZipped')
                            console.log('--------------------------')
                        }                    
                    })   
                })
            })
        } catch (err) {
            console.log('NOoooo')
        }
    },50)
}

// Delete temp folder

function tempdel(){
    setTimeout(() => {        
        fs.rmdir('./temp', (err) => {
            if (err) {
              throw err
            } else {
              console.log("Successfully removed temp directory!")
            }
          })
    }, 500)
}
    
module.exports.renameall = renameall;
module.exports.unzip = unzip;
module.exports.tempdel = tempdel;