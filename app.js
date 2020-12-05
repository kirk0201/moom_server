const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const userRouter = require("./routes/userRouter");
const dataRouter = require("./routes/dataRouter");
require("dotenv").config();

const app = express();
const port = 4000;

app.use(
  session({
    secret: process.env.PJ_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/data", dataRouter);
app.use("/user", userRouter);
app.use(express.static(path.join(__dirname, "../front/build")));
app.get("/", (req, res) => {
  res.status(200).send("Connect server!!");
});

app.listen(port, () => {
  console.log(`Success!! Connect in PORT ${port}`);
});

module.exports = app;
