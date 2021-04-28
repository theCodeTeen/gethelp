const express=require('express');
const cors=require('cors');
const rateLimit = require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss=require('xss-clean');

const helpRouter=require('./routes/helpRoutes');

const errorController= require('./controllers/errorController');

const app=express();
//GLOBAL MIDDLEWARES
app.use(cors());
//app.use(helmet());
//app.use(mongoSanitize());
//app.use(xss());
const limiter=rateLimit({
   max:100,
   windowMs: 1000*60*60,
   message:'Too many request! Try again after an hour'
});
//app.use('/api',limiter);
app.use(express.json());

app.use('/api/v1/help',helpRouter);

app.use('*',(req,res,next)=>{
    next(new Error('Invalid route '+req.originalUrl));
})

app.use(errorController.errorControl);

module.exports=app;