const asyncHandler = require("express-async-handler");



//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler (async (req,res)=>{
    // res.send("Server is started");
    // res.json({message : "Get all contacts"});
    res.status(200).json({message : "Get all contacts"});
});

//@desc Create a contacts
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async (req,res)=>{
    console.log(req.body);
    const {firstName,lastName,email,phone} = req.body;
    if(!firstName || !lastName || !email || !phone)
        {
            res.status(400);
            throw new Error("All Fields are mandetory");
        }
    res.status(200).json({message : "Create contacts"});
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access Public

const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Get contact for ${req.params.id}`});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Update contacts for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Delete contacts for ${req.params.id}`});
});





module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};