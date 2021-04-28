const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const mongoose=require('mongoose');
const app=require('./app');

process.on('uncaughtException',(err)=>{
    console.log(err.name,err.message);
    console.log('UNCAUGHT EXCEPTION: Shutting down program..');
    process.exit(1);
});

const DB= process.env.DATABASE_URL.replace('<password>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=>console.log("Database connected"));


const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

process.on('unhandledRejection',(err)=>{
    console.log(err.name,err.message);
    console.log('UNHANDLED REJECTION: Shutting down program..');
    server.close(()=>{
        process.exit(1);
    });
});