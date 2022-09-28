import express from "express";
import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("Watch video");

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
