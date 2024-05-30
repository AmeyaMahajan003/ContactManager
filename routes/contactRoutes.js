const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
    // res.send("Server is started");
    // res.json({message : "Get all contacts"});
    res.status(200).json({message : "Get all contacts"});
});

router.route("/").post((req,res)=>{
    res.status(200).json({message : "Create contacts"});
});

router.route("/:id").get((req,res)=>{
    res.status(200).json({message : `Get contact for ${req.params.id}`});
});

router.route("/:id").put((req,res)=>{
    res.status(200).json({message : `Update contacts for ${req.params.id}`});
});

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message : `Delete contacts for ${req.params.id}`});
});



module.exports = router;