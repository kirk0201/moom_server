const { user } = require("../../models");

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
  put: async (req, res) => {
    const { name, password, birth, promise, sex, profile } = req.body;
    var sess = req.session;
    if (sess.userid) {
      let userdata = await user.findOne({
        where: {
          id: sess.userid,
        },
      });
      user
        .update(
          {
            //or 연산자는 true를 반환하는것이 아니라 true에 해당하는 대상을 가져옴
            // 따라서 name이 undefined일 경우 userdata.dataValues.name을 그대로 반환
            name: name || userdata.dataValues.name,
            password: password || userdata.dataValues.password,
            birth: birth || userdata.dataValues.birth,
            promise: promise || userdata.dataValues.promise,
            sex: sex || userdata.dataValues.sex,
            profile: profile || userdata.dataValues.profile,
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
          //promise에서 에러 발생시
          console.log(error);
          res.status(500).send("수정에 실패했습니다");
        });
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
