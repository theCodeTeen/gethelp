const express=require('express');
const helpController = require('./../controllers/helpController');

const router=express.Router();

router.route('/').post(helpController.saveData).get(helpController.getData);

module.exports=router;