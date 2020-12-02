const { user } = require("../../models");
const crypto = require("crypto");

module.exports = {
  post: (req, res) => {
    const { name, email, password, sex } = req.body;
    const secret = "abcdefg";
    const encryption = crypto
      .createHmac("sha256", secret)
      .update(password)
      .digest("hex");
    user
      .findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          name: name,
          password: encryption,
          type: "nomal",
          sex: sex,
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
