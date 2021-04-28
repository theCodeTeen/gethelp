const Help = require('./../models/helpModel');
const catchAsync= require('./../utilitis/catchAsync');

exports.saveData = catchAsync(async(req,res,next)=>{
    const help= await Help.create({
        name:req.body.name,
        contact:req.body.contact,
        state:req.body.state,
        district:req.body.district,
        description:req.body.description
    });

    res.status(200).json({
        status:'success',
        data:help
    });
});
exports.getData=catchAsync(async(req,res,next)=>{
    //console.log(req.query);
    const helps= await Help.find({
        state: req.query.state,
        district:req.query.district
    }).select('-__v').sort({'createdAt':-1});
    res.status(200).json({
        status:'success',
        length:helps.length,
        data:helps
    });
});