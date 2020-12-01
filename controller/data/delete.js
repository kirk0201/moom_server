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
  delete: async (req, res) => {
    const sess = req.session;
    const { body_part } = req.body;
    const id = req.params.id;
    if (sess.userid) {
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
          const result = await model[body_part].destroy({
            where: {
              id: id,
            },
          });
          if (result) {
            res.status(200).send("삭제 성공");
          } else {
            res.status(400).send("잘못된 접근입니다");
          }
        } else {
          const userdata = await user.findOne({
            where: { id: sess.userid },
          });
          for (let i in userdata.dataValues) {
            if (userdata.dataValues[i] === body_part) {
              const result = await model[i].destroy({
                where: {
                  id: id,
                },
              });
              if (result) {
                res.status(200).send("삭제 성공");
              } else {
                res.status(400).send("잘못된 접근입니다");
              }
            }
          }
          res.status(500).send("삭제에 실패하였습니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("삭제에 실패하였습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
