//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req,res)=>{
    // res.send("Server is started");
    // res.json({message : "Get all contacts"});
    res.status(200).json({message : "Get all contacts"});
};

//@desc Create a contacts
//@route POST /api/contacts
//@access Public

const createContact = (req,res)=>{
    console.log(req.body);
    res.status(200).json({message : "Create contacts"});
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access Public

const getContact = (req,res)=>{
    res.status(200).json({message : `Get contact for ${req.params.id}`});
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = (req,res)=>{
    res.status(200).json({message : `Update contacts for ${req.params.id}`});
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = (req,res)=>{
    res.status(200).json({message : `Delete contacts for ${req.params.id}`});
};





module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};