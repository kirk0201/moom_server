const { user, body_part } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { name, email, password, sex } = req.body;
    user
      .findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          name: name,
          password: password,
          type: "normal",
          sex: sex,
          profile: "https://i.ibb.co/wMjpgvr/profile.jpg",
        },
      })
      .then(async ([user, created]) => {
        //생성되면 created가 ture
        if (!created) {
          return res.status(409).send("해당 이메일은 이미 사용중입니다.");
        }
        // 기본 부위 추가
        try {
          body_part.create({
            body_part: "body_fat",
            user_id: user.id,
          });
          body_part.create({
            body_part: "weight",
            user_id: user.id,
          });
          body_part.create({
            body_part: "shoulder",
            user_id: user.id,
          });
          body_part.create({
            body_part: "chest",
            user_id: user.id,
          });
          body_part.create({
            body_part: "waist",
            user_id: user.id,
          });
          body_part.create({
            body_part: "hip",
            user_id: user.id,
          });
          body_part.create({
            body_part: "thigh",
            user_id: user.id,
          });
        } catch (e) {
          console.log(e);
          res.status(500).send("회원가입에 실패했습니다");
        }
        res.status(200).send("회원가입 성공");
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("회원가입에 실패했습니다");
      });
  },
};
