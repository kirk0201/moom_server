const { user } = require("../../models");

module.exports = {
  post: (req, res) => {
    const { name, email, password } = req.body;
    user
      .findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          name: name,
          password: password,
        },
      })
      .then(async ([user, created]) => {
        if (!created) {
          return res.status(409).send("해당 이메일은 이미 사용중입니다.");
        }
        res.status(200).send("회원가입 성공");
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("회원가입에 실패했습니다");
      });
  },
};
