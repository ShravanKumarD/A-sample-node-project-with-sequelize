const db  = require("../models");
const lVCountModel = db.LVCount;

exports.LVCount = (req,res,next)=>{
    const model={
        nameOftheSpaceStation:req.body.nameOftheSpaceStation,
        numberOfVehicles:req.body.numberOfVehicles,
        description:req.body.description
    }
    lVCountModel.create(model).then((data)=>{
        console.log(data);
        res.status(201).json(saved_data=data)
    }).catch(error=>{
        console.log("error occured while adding data to the server")
        res.status(400).json(error);
    })

}