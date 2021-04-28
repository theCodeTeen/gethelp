const handleValidationErrorDB = (err,res) =>{
    let msg= Object.values(err.errors).map(el=>el.message).join(". ");
    res.status(400).json({
        status:'fail',
        message:`VALIDATION_ERROR: ${msg}`
    })
}
const handleCastErrorDB = (err,res) =>{
    res.status(400).json({
        status:'fail',
        message:`Invalid ${err.path} : ${err.value}`
    });
}

const handleDuplicateField = (err,res) =>{
    let field= err.keyValue[Object.keys(err.keyValue)[0]];
    res.status(400).json({
        status:'fail',
        message:`Duplicate field value "${field}". Please use another value`
    });
}
exports.errorControl = (err,req,res,next)=>{
    if(err.name=="CastError") handleCastErrorDB(err,res);
    else if(err.code==11000)  handleDuplicateField(err,res);
    else if(err.name=="ValidationError") handleValidationErrorDB(err,res);
    else{
    res.status(400).json({
        status:'fail',
        message:err.message
    });
    }
}