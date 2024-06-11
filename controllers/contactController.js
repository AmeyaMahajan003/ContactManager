const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const contactModel = require("../models/contactModel");


//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler(async (req,res)=>{
    // res.send("Server is started");
    // res.json({message : "Get all contacts"});
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//method - Post (to create contact)
//router POST /api/contacts/



const createContact = asyncHandler(async (req,res)=>{
    const {fname,lname,email,phone} = req.body;
    if(!fname || !lname || !email || !phone){
        res.status(400);
        throw new Error("All Fields are mandetory");
    }
    const contact = await Contact.create({
        fname,
        lname,
        email,
        phone
    });
    res.status(201).json(contact);
});

//method - Get (to find contact using id)
//router GET /api/contacts/:id

const getContact = async (req,res)=>{
        
        try{
            const cont = await Contact.findById(req.params.id);
            if(!cont){
                res.status(404);
                throw new Error("Contact not found");
            }
            res.status(200).json(cont);
        }
        catch{
            res.status(404).json({message:"Contact Not Found"});
        }
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = async (req,res)=>{
    try{
        const cont = await Contact.findById(req.params.id);
        if(!cont){
            res.status(404);
            throw new Error("Contact not found");
        }
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(updatedContact);
    }
    catch{
        res.status(404).json({message:"Contact Not Found"});
    }
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = async (req,res)=>{
    try{
        const cont = await Contact.findById(req.params.id);
        if(!cont){
            res.status(404);
            throw new Error("Contact not found");
            }
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedContact);
    }
    catch{
        res.status(404).json({message:"Contact Not Found"});
    }
};





module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};