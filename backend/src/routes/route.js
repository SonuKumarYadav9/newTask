const express = require("express")
const numController = require('../controller/numberContoller')
const router= express.Router()

//destructuring
let {checkNumber,gameDetail}=numController


// Api
router.post("/play",checkNumber)
router.get("/playlist",gameDetail)

module.exports = router
