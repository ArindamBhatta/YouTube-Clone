import { Router } from "express";

import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);

export default router;

/* 
import { Router } from "express";
const router = Router();
export default router;
*/