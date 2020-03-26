const express = require("express");
const yewu = require("./yewu")

var router = express.Router();

router
.get("/",yewu.getAll)
.get("/getone",yewu.getOne)
.get("/updateone",yewu.upuser_get)
.get("/deleteone",yewu.delete)
.post("/updateone",yewu.upuser_post)
.post("/addone",yewu.addOne_post)
.get("/login",yewu.login_get)
.post("/login",yewu.login_post)

module.exports = router;