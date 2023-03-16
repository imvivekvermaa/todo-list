const express= require("express");
const bodyParser= require("body-parser");
const date= require("./date")

const app= express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

const day= date.getDate
const items=["Buy Food","Cook Food","Eat Food"];
const workItems=[]
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{

    
    
    
    res.render("list", {listTitle: day,newListItems: items})

})
app.post("/", (req, res)=>{
    let item =req.body.newItem;

    if(req.body.list==="Work"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/")
    }

    console.log(item)
})

app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work List",newListItems:workItems})
    
})
app.post("/work",(req, res)=>{
    let item= req.body.newItem;
    workItems.push(item)
    res.redirect("/work")
})
const port= 3000;

app.listen(port, ()=>{
    console.log("Server started")
})