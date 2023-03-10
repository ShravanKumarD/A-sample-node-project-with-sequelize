const { response } = require('express');

const db = require('../models');
const spaceCentreSchema= db.spaceCS;
 

exports.spaceCentrenames=(req,res,next)=>{
    const spaceCentreName = req.body.spaceCentreName;
    const location = req.body.location;
    const govt_Collaboration=req.body.govt_Collaboration;
    const nameOftheounder = req.body.nameOftheounder;
   const Model =
    {
        spaceCentreName:spaceCentreName,
        location:location,
        govt_Collaboration:govt_Collaboration,
        nameOftheounder:nameOftheounder
    }
   
    spaceCentreSchema.create(Model)
    .then((Model)=>{
        console.log(Model);
        res.status(201).json({messege:`responses saved successfully with ${Model.id}`})
    })
}