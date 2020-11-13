console.log('----------main app----------')

const zip = require('decompress')
const fs = require('fs')
const path = require('path')

// Taking all zip and rename it

fs.readdir('./original_zips', (err, data) =>{
    console.log(data);
    data.forEach((file, i) => {
        console.log(file + ' ' + path.extname(file))
        let ext = path.extname(file)
        if (ext == '.zip'){
            fs.copyFileSync('./original_zips/'+ file, './temp/'+ i + '.zip')
            console.log('The copy has been made')
            console.log('New name is ' + i + '.zip')
        }
    })
})

// Unzip - This part works well

// zip('original_zips/1.zip', 'original_zips').then(files => {
//     console.log('done!');
// });

