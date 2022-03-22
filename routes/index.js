const express = require('express')
const router = express.Router()
const course = require('../model/courseModel')

router.get('/',async(req,res)=>{
    const coursesArr = await course.find()
    console.log(coursesArr);
    res.render('index', {coursesArr: coursesArr})
})
module.exports= router