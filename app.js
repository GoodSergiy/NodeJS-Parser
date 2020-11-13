console.log('main app')

const zip = require('decompress')
const fs = require('fs')
const path = require('path')

// Taking all zip and rename it



// Unzip - This part works well

zip('original_zips/1.zip', 'original_zips').then(files => {
    console.log('done!');
});

