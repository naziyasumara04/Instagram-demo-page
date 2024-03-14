const express=require("express");
const app=express();
const path=require("path");

const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,(req,res)=>{
    console.log(`I am listening ${port}`);
});


app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const datajson=require("./data.json");
    const data=datajson[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
});
