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
        for (let i in userdata.dataValues) {
          if (userdata.dataValues[i] !== undefined) {
            result[i] = { name: i };
            result[i].value = await [i].findAll({
              where: {
                user_id: sess.userid,
              },
            });
            result[i].value = result[i].value.pop();
          }
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
