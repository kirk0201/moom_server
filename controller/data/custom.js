module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      try {
        let result = {};
        result.custom1 = await custom1.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.custom2 = await custom2.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.custom3 = await custom3.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.custom4 = await custom4.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.custom5 = await custom5.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
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
