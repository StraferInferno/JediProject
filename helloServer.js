var express = require("express");

var jediLookup = require("./jediLookup")

var app = express();

app.get("/", function(request,response){
response.json({message:"Hello World"})

})

// app.get("/force",function(request,response){
// response.send("force is with you");
// })


// app.get("/jedi/:firstname/:lastname",function(request,response){
// var first= request.params.firstname;
// var last= request.params.lastname;

// response.send(["Hello", first, last].join("**"));

// })




app.get("/jedi/:firstname/:lastname" ,function(request,response){

var first = request.params.firstname;
var last = request.params.lastname;

console.log(first);

var isAJedi = jediLookup.isOk(first);

if(isAJedi){
	 console.log("This Person is a jedi");
	 response.send("The Real Jedi Name is :" +" "+ last.slice(0,3) + first.slice(0,2));	
}
else{
	
	response.send("this Person is not a jedi. He is a Jerk");
}

});

app.listen(3000);