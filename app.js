const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const redis = require("redis");
const session = require("express-session");
const userRouter = require("./routes/userRouter");
const dataRouter = require("./routes/dataRouter");
require("dotenv").config();
const app = express();
const port = 4000;

let RedisStore = require("connect-redis")(session);
let client = redis.createClient(6379, "localhost");

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    // 허용하는 출처
    origin: ["https://m00m.ml", "http://localhost:3000"],
    //허용하는 요청 종류
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  session({
    store: new RedisStore({ client: client, ttl: 260 }),
    secret: process.env.PJ_SECRET,
    resave: true, // false
    saveUninitialized: true,
    cookie: {
      secure: true,
      // 통신 포트를 한정 지어서? 자바스크립트를 통한 공격 방지
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 1000,
      sameSite: "none",
    },
  })
);

app.use("/data", dataRouter);
app.use("/user", userRouter);
//서버에 접근했을때 빌드된 클라이언트 정적 파일을 전송해줌
/* app.use(express.static("build")); */
app.get("/", (req, res) => {
  res.status(200).send("Connect server!!");
});

app.listen(port, () => {
  console.log(`Success!! Connect in PORT ${port}`);
});

module.exports = app;
