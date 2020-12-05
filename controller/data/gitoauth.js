const axios = require("axios");
const { user } = require("../../models");
module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    const requestToken = req.query.code;
    const clientID = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const response = await axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
      headers: {
        accept: "application/json",
      },
    });
    let accessToken = response.data.access_token;
    console.log("access_token = " + accessToken);
    const userdata = await axios({
      method: "GET",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    const useremail = await axios({
      method: "GET",
      url: `https://api.github.com/user/emails`,
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    console.log("useremail.data");
    for (let i in useremail.data[0]) {
      console.log(i + " : " + useremail.data[0][i]);
    }
    console.log("userdata.data");
    for (let i in userdata.data) {
      console.log(i + " : " + userdata.data[i]);
    }
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
