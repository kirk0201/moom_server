const axios = require("axios");
const { user } = require("../../models");
module.exports = {
  post: async (req, res) => {
    const sess = req.session;
    //url로 전달해준 토큰 받아오기
    const requestToken = req.query.code;
    const clientID = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    //클라이언트 시크릿을 확인하고 한번더 토큰을 부여해준다.
    const response = await axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
      headers: {
        accept: "application/json",
      },
    });
    let accessToken = response.data.access_token;
    console.log("access_token = " + accessToken);
    //토큰으로 유저 정보 가져오기(여긴 권한 상관없이 접근 가능)
    const userdata = await axios({
      method: "GET",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    //토큰으로 유저의 이메일 정보 가져오기 (여긴 scope=user 에 해당하는 토큰이 필요)
    const useremail = await axios({
      method: "GET",
      url: `https://api.github.com/user/emails`,
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    //where에 해당하는 친구 있으면 찾고 없으면 defaults로 만들고
    const [userresult, created] = await user.findOrCreate({
      where: { email: useremail.data[0].email },
      defaults: {
        email: useremail.data[0].email,
        name: userdata.data.name,
        type: "github",
        password: String(userdata.data.id),
        profile: userdata.data.avatar_url,
        sex: null,
      },
    });
    // 생성되면 created가 true 찾으면 false가 됨
    if (created) {
      sess.userid = userresult.dataValues.id;
    } else {
      if (userresult.dataValues.type === "github") {
        sess.userid = userresult.dataValues.id;
      } else {
        //동일한 이메일의 사용자가 있지만 깃허브 사용자가 아닐경우
        res
          .status(400)
          .send(`${userresult.dataValues.type}(으)로 사용중입니다`);
      }
    }
    //리다이렉션
    res.status(200).redirect("/");
  },
};
