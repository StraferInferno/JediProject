var listOfJedis= ['Kyle', 'Akshay', 'Peter', 'Nissy'];

var isOk = function(first) {

this.first=first;

console.log(first);

// var name='Pavan';  //The name arguement to this function is not reaching.Hence hardcoded name value//

console.log(first);

	if ( listOfJedis.indexOf(first)> -1){
		
		return true;
	}

return false;
};

module.exports.isOk= isOk; 