var path = require('path');

const SRC_DIR=path.resolve(__dirname,'public');
const deletee=path.resolve(__dirname,'delete');

const defaultInclude=[SRC_DIR];
const defaultIncludee=SRC_DIR;
const a = [];
const b = [{c:'loader-babel'},{defaultInclude}];

console.log(SRC_DIR);
console.log(a);
console.log([SRC_DIR]);
console.log(SRC_DIR+'\index.js');
console.log(defaultInclude);
console.log(defaultIncludee);
console.log(b);
console.log(deletee);


