const {
  user,
  custom1,
  custom2,
  custom3,
  custom4,
  custom5,
} = require("../../models");

module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      try {
        let userdata = await user.findOne({
          where: {
            id: sess.userid,
          },
          attributes: ["custom1", "custom2", "custom3", "custom4", "custom5"],
        });
        let result = {};
        if (userdata.custom1) {
          result[userdata.custom1] = await custom1.findAll({
            where: { user_id: sess.userid },
            attributes: ["value"],
          });
        }
        if (userdata.custom2) {
          result[userdata.custom2] = await custom2.findAll({
            where: { user_id: sess.userid },
            attributes: ["value"],
          });
        }
        if (userdata.custom3) {
          result[userdata.custom3] = await custom3.findAll({
            where: { user_id: sess.userid },
            attributes: ["value"],
          });
        }
        if (userdata.custom4) {
          result[userdata.custom4] = await custom4.findAll({
            where: { user_id: sess.userid },
            attributes: ["value"],
          });
        }
        if (userdata.custom5) {
          result[userdata.custom5] = await custom5.findAll({
            where: { user_id: sess.userid },
            attributes: ["value"],
          });
        }
        for (let i in result) {
          result[i] = result[i][result[i].length - 1].value;
        }
        res.status(200).json(result);
      } catch (e) {
        console.log(e);
        res.status(500).send("정보를 가져오는데 실패했습니다");
      }
    } else {
      res.status(400).send("잘못된 접근입니다");
    }
  },
  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {},
};
