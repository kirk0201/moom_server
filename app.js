const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const userRouter = require("./routes/userRouter");
const dataRouter = require("./routes/dataRouter");
require("dotenv").config();
const redis = require("redis");
const redisStore = require("connect-redis")(session);

const app = express();
// TODO: 로컬용 포트 
// const port = 4000;

// TODO: 배포용 포트
const port = 443;

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

var client = redis.createClient(6379, "localhost");

// 배포용 세션입니다
app.use(
  session({
    store: new redisStore({ client: client, ttl: 200, logErrors: true }),
    secret: process.env.PJ_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      // 통신 포트를 한정 지어서? 자바스크립트를 통한 공격 방지
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 1000,
      sameSite: "none",
    },
  })
); */


// 로컬용 세션 입니다.
// app.use(
//   session({
//     secret: process.env.PJ_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );


app.use("/data", dataRouter);
app.use("/user", userRouter);
//서버에 접근했을때 빌드된 클라이언트 정적 파일을 전송해줌

// HTTPS-PROTOCAL (배포 용)
// 로컬 환경 테스트시 모두 주석처리
let sslOption = {
  ca: fs.readFileSync("/etc/letsencrypt/live/m00m.cf/fullchain.pem"),
  key: fs.readFileSync("/etc/letsencrypt/live/m00m.cf/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/m00m.cf/cert.pem"),
};
// http는 참고용으로 남겨둠 배포, 로컬에서 주석처리할것
// http.createServer(app).listen(80);
https.createServer(sslOption, app).listen(443);
// ------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.status(200).send("Connect Server!!");
});
app.listen(port, () => {
  console.log(`Success!! Connect in PORT ${port}`);
});

module.exports = app;
