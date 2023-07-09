import express from "express"

import {home} from "../controllers/userController.js"

const router = express.Router()

router.get("/",home)
// router.get("/login",login)
// router.post("/register",register)

export default router