let express=require('express');
let app=express();
let bodyParser=require('body-parser');

let db=[];

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static("views"));

app.get("/",function(req,res){
    res.render("index.html");
})

app.get("/newtask",(req,res)=>{
    res.render("newtask.html");
})

app.post("/data",function(req,res){
    db.push(req.body)
    console.log(db);
    res.send("yes");
})

app.get("/listtasks",function(req,res){
    res.render("listtasks.html",{taskDb:db});
})

app.listen(8080,()=>{console.log("Listening at port 8080")});