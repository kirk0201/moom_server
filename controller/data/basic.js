const {
  shoulder,
  body_fat,
  chest,
  thigh,
  weight,
  hip,
  waist,
} = require("../../models");

module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      try {
        let result = {};
        result.shoulder = await shoulder.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.body_fat = await body_fat.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.chest = await chest.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.thigh = await thigh.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.weight = await weight.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.hip = await hip.findAll({
          where: { user_id: sess.userid },
          attributes: ["value"],
        });
        result.waist = await waist.findAll({
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
      res.status(404).send("세션이 없습니다");
    }
  },
};
