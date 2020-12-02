const { user } = require("../../models");
const crypto = require('crypto');

module.exports = {
  get: (req, res) => {
    var sess = req.session;
    if (sess.userid) {
      user
        .findOne({
          where: {
            id: sess.userid,
          },
        })
        .then((result) => {
          console.log("결과" + result);
          res.status(200).json(result);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send("유저 정보를 가져오는데 실패했습니다");
        });
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
  put: (req, res) => {
    const { name, password, birth, promise, sex } = req.body;
    var sess = req.session;
    const secret = "abcdefg";
    const encryption = crypto
      .createHmac("sha256", secret)
      .update(password)
      .digest("hex");
    if (sess.userid) {
      user
        .update(
          {
            name: name,
            password: encryption,
            birth: birth,
            promise: promise,
            sex: sex,
          },
          {
            where: {
              id: sess.userid,
            },
          }
        )
        .then((result) => {
          if (result) {
            res.status(200).send("수정 완료");
          } else {
            res.status(500).send("수정에 실패했습니다");
          }
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send("수정에 실패했습니다");
        });
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
