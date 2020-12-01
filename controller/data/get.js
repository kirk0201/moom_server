const {
  user,
  shoulder,
  chest,
  waist,
  hip,
  thigh,
  weight,
  body_fat,
  custom1,
  custom2,
  custom3,
  custom4,
  custom5,
} = require("../../models");
const model = {
  user,
  shoulder,
  chest,
  waist,
  hip,
  thigh,
  weight,
  body_fat,
  custom1,
  custom2,
  custom3,
  custom4,
  custom5,
};

module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      let body_part = req.body.body_part;
      try {
        let basiclist = [
          "shoulder",
          "chest",
          "waist",
          "hip",
          "thigh",
          "weight",
          "body_fat",
        ];
        if (basiclist.indexOf(body_part) !== -1) {
          /// 기본 목록에 대한 요청일때
          let result = await model[body_part].findAll({
            where: {
              user_id: sess.userid,
            },
            attributes: ["id", "value", "user_id", "scheldule"],
          });
          res.status(200).json(result);
        } else {
          /// custom
          let usercustom = await user.findOne({
            where: {
              id: sess.userid,
            },
            attributes: ["custom1", "custom2", "custom3", "custom4", "custom5"],
          });
          let result;
          for (let i in usercustom.dataValues) {
            console.log(i);
            if (usercustom.dataValues[i] === body_part) {
              result = await model[i].findAll({
                where: {
                  user_id: sess.userid,
                },
                attributes: ["id", "value", "user_id", "scheldule"],
              });
            }
          }
          if (result) {
            res.status(200).json(result);
          } else {
            res.status(400).send(result);
          }
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("정보를 가져오는데 실패했습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
