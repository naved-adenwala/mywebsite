
const conn = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")
const app = express()

app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var title = ""


app.get("/",function(req,res){
    title = "Home"
    res.render(__dirname + "/views/home.ejs",{tit:title})
  })

  app.get("/clie",function(req,res){
    title = "Clients"
    res.render(__dirname + "/views/clients.ejs",{tit:title})
  })

  app.get("/contact",function(req,res){
    title = "Contact Us"
    res.render(__dirname + "/views/contactus.ejs",{tit:title})
  })


  app.get("/about",function(req,res){
    title = "About us"
    res.render(__dirname + "/views/about.ejs",{tit:title})
  })

  app.get("/thanks",function(req,res){
    title = "Thanks"
    res.render(__dirname + "/views/thanks.ejs",{tit:title})
  })


  app.post("/contact",function(req,res){
    var name = req.body.name
    var age = req.body.age
    var phone = req.body.phone
    var email = req.body.email
    var gender = req.body.gender
    var message = req.body.message

    conn.connect(function(error){
      if(error) throw error;
      var sql = "INSERT INTO contacts(name,age,phone,email,gender,message) VALUES('"+name+"','"+age+"','"+phone+"','"+email+"','"+gender+"','"+message+"')";
      
      conn.query(sql,function(error,result){
        if(error) throw error;
        res.redirect("/thanks")
      })
    })

    
  })


  app.listen(3000, function() {
  console.log("Server started on port 3000");
});


