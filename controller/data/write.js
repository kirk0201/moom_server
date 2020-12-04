const { body_part, body_data } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const sess = req.session;
    const { part_name, value } = req.body;
    if (sess.userid) {
      try {
        const body_part_id = await body_part.findOne({
          where: {
            user_id: sess.userid,
            body_part: part_name,
          },
        });

        const result = await body_data.create({
          schedule: new Date(),
          value: value,
          user_id: sess.userid,
          body_part_id: body_part_id.id,
        });
        if (result) {
          res.status(200).send("생성 성공");
        } else {
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("생성에 실패하였습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
