var express = require ("express")
var jedis = require("./jedi")

var app= express()

app.get("/", function(req,res){
res.json({message:"Hello World"})

})

app.get("/force",function(req,res){
res.send("force is with you");
})


app.get("/jedi/:firstname/:lastname",function(req,res){
res.send("Hello"+ req.params("firstname"));
res.send("this route was hit");
})


app.get("/jedi/checkname/:name",function(req,res){
res.send("Hello"+ req.params("name"));
res.send("this route was hit");
var isAJedi = jedis(name)

if(isAJedi){
	 console.log("Is a jedi");
}
else
{
	console.log("nooooo");
}

})

app.listen(3000);