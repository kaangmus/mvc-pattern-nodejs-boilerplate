var natural = require("natural");
var corpus = ['something', 'soothing'];
var spellcheck = new natural.Spellcheck(corpus);
spellcheck.getCorrections('soemthing', 1); // ['something']
var a= spellcheck.getCorrections('soething', 2); // ['something', 'soothing']

var result={};
for(var i=0;i<a.length;i++){
	result[i]=a[i];
}

console.log(JSON.stringify(result));

