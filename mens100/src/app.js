const express = require("express");
require("../src/db/conn");

const mensRanking=require("../src/models/mens");
const router = require("../src/routers/men");

const app =express();

const port= process.env.port || 3000;
//receive json data in express .important
app.use(express.json())


// app.get("/",async(req,res)=>{
//     res.send("hello from vaibhav")
// })

app.use(router);


app.listen(port,()=>{
    console.log(`connection is live at port no.${port}`);
})