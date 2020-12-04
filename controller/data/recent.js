const { body_part, body_data } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    //세션의 확인 유무
    if (sess.userid) {
      try {
        body_parts = await body_part.findAll({
          where: {
            user_id: sess.userid,
          },
        });
        let result = {};
        for (let i of body_parts) {
          let recent = await body_data.findAll({
            where: {
              body_part_id: i.id,
              user_id: sess.userid,
            },
          });
          if (recent.length === 0) {
            result[i.body_part] = null;
          } else {
            result[i.body_part] = recent.pop().value;
          }
        }
        res.status(200).send(result);
      } catch (e) {
        console.log(e);
        res.status(500).send("정보를 가져오는데 실패했습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
