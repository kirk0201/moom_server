const { user } = require("../../models");
module.exports = {
  post: async (req, res) => {
    const sess = req.session;
    const { email, name, profile, id } = req.body;
    //where에 해당하는 친구 있으면 찾고 없으면 defaults로 만들고
    const [userresult, created] = await user.findOrCreate({
      where: { email: email },
      defaults: {
        email: email,
        name: name,
        type: "google",
        password: id,
        profile: profile,
        sex: null,
      },
    });
    // 생성되면 created가 true 찾으면 false가 됨
    if (created) {
      sess.userid = userresult.dataValues.id;
    } else {
      if (userresult.dataValues.type === "google") {
        sess.userid = userresult.dataValues.id;
      } else {
        //동일한 이메일의 사용자가 있지만 깃허브 사용자가 아닐경우
        res
          .status(400)
          .send(`${userresult.dataValues.type}(으)로 사용중입니다`);
      }
    }
    //리다이렉션
    res.status(200).send("로그인 성공");
  },
};
