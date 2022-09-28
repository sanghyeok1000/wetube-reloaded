import express from "express";
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

const handleEdit = (req, res) => res.send(" Edit user");

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
