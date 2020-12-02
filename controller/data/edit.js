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
  put: async (req, res) => {
    const sess = req.session;
    const { body_part, value } = req.body;
    const id = req.params.id;
    if (sess.userid) {
      try {
        const result = await model[body_part].update(
          {
            value: value,
          },
          {
            where: {
              id: id,
            },
          }
        );
        if (result) {
          res.status(200).send("수정 성공");
        } else {
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("수정에 실패하였습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
