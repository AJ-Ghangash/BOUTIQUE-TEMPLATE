const express=require('express');
const app=express();

const bodyParser=require("body-parser");
app.use(express.static("public"));

app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:true}));




app.listen(process.env.PORT||8080,function(err){
    if(err){
        console.log("err is",err);

    }
    else{
        console.log("server started on 8080 ");
    }
});