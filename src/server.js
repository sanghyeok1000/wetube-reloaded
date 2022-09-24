import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEdituser = (req, res) => res.send(" Edit user");

userRouter.get("/edit", handleEdituser);

const videoRouter = express.Router();

const handleWatchvideos = (req, res) => res.send("Watch video");

videoRouter.get("/watch", handleWatchvideos);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
