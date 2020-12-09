const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
require("dotenv").config();
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.PJ_BUCKET,
    acl: "public-read",
    key: function (req, file, cb) {
      // 파일명 앞에 폴더명을 작성하면 해당 폴더에 저장됨
      cb(null, `images/user_profile/${Date.now() + "." + file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000 * 1000 * 5,
  },
});
//여기까지 프로필 사진 관련 multer 입니다

const express = require("express");
const { userController } = require("../controller");
const router = express.Router();

router.post("/img", upload.single("imgFile"), function (req, res) {
  let imgFile = req.file;
  res.send(imgFile);
});

router.post("/signup", userController.signup.post);
router.delete("/signout", userController.signout.delete);
router.post("/login", userController.login.post);
router.get("/logout", userController.logout.get);
router.get("/edit", userController.edit.get);
router.put("/edit", userController.edit.put);
router.post("/googleoauth", userController.googleoauth.post);
router.get("/gitoauth", userController.gitoauth.get);

module.exports = router;
