const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.get('/api/contacts',(req,res)=>{
    // res.send("Server is started");
    // res.json({message : "Get all contacts"});
    res.status(200).json({message : "Get all contacts"});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});