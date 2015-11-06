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




app.get("/jedi/:name" ,function(request,response){

var name = request.param.name;

var isAJedi = jediLookup.isOk(name);
if(isAJedi){
	 console.log("This Person is a jedi");
	 response.send("this route was hit");	
}
else{
	
	response.send("this Person is not a jedi");
}

});

app.listen(3000);