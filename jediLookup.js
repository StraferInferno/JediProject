var listOfJedis= ['Kyle', 'Akshay', 'Peter', 'Nissy'];

var isOk = function(name) {

this.name=name;
console.log(name);

// var name='Pavan';  //The name arguement to this function is not reaching.Hence hardcoded name value//

console.log(name);

	if ( listOfJedis.indexOf(name)> -1){
		
		return true;
	}

return false;
};

module.exports.isOk= isOk; 