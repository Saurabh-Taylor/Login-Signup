import express from "express"

import {home,createuser} from "../controllers/userController.js"

const router = express.Router()

router.get("/",home)
// router.get("/login",login)
router.post("/register",createuser)

export default router