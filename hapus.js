const del = require('del');
 
// del(['tmp/*.js', '!tmp/unicorn.js']).then(paths => {
//     console.log('Deleted files and folders:\n', paths.join('\n'));
// });

// untuk mentest penghapusan, buat folder berisi file tmp/unicorn.js
del.sync(['tmp/**', '!tmp/unicorn.js']);