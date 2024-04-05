const express=require("express");

const router=express.Router();

const {allCourse,title} = require("../controller/apiController");



router.route("/allCourse").get(allCourse);
router.route("/courseDetail").get(title);



module.exports=router;