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

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    // 허용하는 출처
    origin: ["https://mo2m.tk", "http://localhost:3000", "https://www.mo2m.tk"],
    // 허용하는 요청 종류
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// //------------------------ 여기서 부터 배포 전용 입니다. --------------------------- ctrl + shift + a
// // TODO: 배포용 포트
const port = 443;

var client = redis.createClient(6379, "localhost");

// TODO:배포용 세션입니다
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
);

app.use("/data", dataRouter);
app.use("/user", userRouter);

// TODO:HTTPS-PROTOCAL (배포 용)
// HTTPS설정을 위한 인증서 옵션
// 임의로 인증서 위치를 옮기거나 복사하지말고 원본 위치를 사용할것
let sslOption = {
  ca: fs.readFileSync("/etc/letsencrypt/live/mo2m.ml/fullchain.pem"),
  key: fs.readFileSync("/etc/letsencrypt/live/mo2m.ml/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/mo2m.ml/cert.pem"),
};
//<---- 서버 생성 express의 app.listen()과 같은 로직이다 공식문서에 나와있으니 참고   ---->
// http는 참고용으로 남겨둠 배포, 로컬에서 주석처리할것
// http.createServer(app).listen(80);
// HTTPS는 인증서가 발급된 상태에서만 만들수 있기 때문에 해당 옵션을 추가해야함
https.createServer(sslOption, app).listen(port);

app.get("/", (req, res) => {
  res.status(200).send("Connect Server!!");
});

module.exports = app;

//------------------------ 여기서 부터 로컬 전용 입니다. --------------------------- ctrl + shift + a

// const port = 4000;

// app.use(
//   session({
//     secret: process.env.PJ_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use("/data", dataRouter);
// app.use("/user", userRouter);

// app.get("/", (req, res) => {
//   res.status(200).send("Connect Server!!");
// });

// // TODO:배포 환경에서 주석
// app.listen(port, () => {
//   console.log(`Success!! Connect in PORT ${port}`);
// });

// module.exports = app;
