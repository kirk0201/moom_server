const { user } = require("../../models");
const crypto = require("crypto");
require("dotenv").config();
const secret = process.env.PJ_SECRET;

module.exports = {
  post: (req, res) => {
    let { email, password } = req.body;
    //where에서 email만 조건으로 들어가기 때문에 비밀번호는 따로 암호화를 해서 대조 해야함
    const shasum = crypto.createHmac("sha512", secret);
    shasum.update(password);
    password = shasum.digest("hex");
    var sess = req.session;
    user
      .findOne({
        where: {
          email: email,
        },
      })
      .then((result) => {
        if (result === null) {
          res.status(404).send("존재하지 않는 사용자 입니다");
        } else {
          //해당사용자가 일반 타입의 사용자인지 확인후 비밀번호 확인
          if (result.type === "일반") {
            if (result.password !== password) {
              res.status(400).send("비밀번호가 일치하지 않습니다");
            }
            sess.userid = result.id;
            console.log("==== 세션주는중 ====");
            console.log(sess.userid);
            console.log(result.dataValues.id);
            res.status(200).send("로그인 성공");
          } else {
            res.status(400).send(`${result.type} 회원입니다`);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("로그인에 실패했습니다");
      });
  },
};
