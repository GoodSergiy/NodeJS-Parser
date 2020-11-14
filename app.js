console.log('----------main app----------')

const zip = require('decompress')
const fs = require('fs')
const path = require('path')

// Taking all zip and rename it ##### - This part works well

try {
    const data =  fs.readdirSync('./original_zips')
    console.log(data)
    data.forEach((file, i) => {
        console.log(file + ' ' + path.extname(file))
        let ext = path.extname(file)
        if (ext == '.zip'){
            fs.copyFileSync('./original_zips/'+ file, './temp/'+ i + '.zip')
            console.log('The copy has been made')
            console.log('New name is ' + i + '.zip')
        }
    })
} catch (err) {
    console.log('NO')
}

// Unzip ##### - This part works well

try {
    const data = fs.readdirSync('./temp')
    console.log(data);
    data.forEach(file => {
        zip('./temp/' + file, './CSV').then(files => {
            data.forEach ((file, i) => {                
                try {
                    fs.unlinkSync('./temp/'+ file, + i + '.zip', (err) => {
                        console.log('UnZiped')
                    })                           
                } catch (error) {
                    console.log(file + i + ' Was UnZipped')
                }
            })
        })
    })
} catch (err) {
    console.log('NOoooo')
}
