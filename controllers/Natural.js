var natural = require("natural");



exports.Natural = function(request, response){
		var corpus = ['something', 'soothing'];
		var spellcheck = new natural.Spellcheck(corpus);
		spellcheck.getCorrections('soemthing', 1); // ['something']
		var word= spellcheck.getCorrections('soething', 2); // ['something', 'soothing']    
    	response.render('home/nlp', {data : word} );
};
