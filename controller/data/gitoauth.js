const axios = require("axios");
const { user } = require("../../models");

module.exports = {
  get: async (req, res) => {
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
    const accessToken = response.data.access_token;
    console.log("access_token = " + accessToken);
    const userdata = await axios({
      method: "get",
      url: `//api.github.com/user`,
      headers: {
        Authorization: "token " + token,
      },
    });

    const [userresult, created] = user.findOrCreate({
      where: { email: userResponse.data.email },
      defaults: {
        email: userdata.data.email,
        password: userdata.data.node_id,
        name: userdata.data.name,
        type: "Social",
        sex: null,
      },
    });
    sess.userid = userresult.id;
    res.status(200).redirect(`/`);
    /* res.redirect("S3url"); 클라이언트랑 서버랑 분리 배포시
 res.redirect("서버url"); 서버에 다담아서 배포시 */
  },
};
