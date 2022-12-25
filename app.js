const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
var items=[];
let workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
day=date.getDate();
app.get("/",function(req , res){
    res.render("list",{ListTitle: day, newListItems: items});
});
app.get("/work", function(req,res){
    res.render("list",{ListTitle: "Work List" , newListItems:workItems});
});
app.get("/about",function(req,res){
    res.render("about");
});
app.post("/",function(req,res){
    let item=req.body.newItem;
if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work")
}
else{
    items.push(item);
    res.redirect("/");
}
});
app.listen(3000,function(){
    console.log("Server is running on port 3000");
})