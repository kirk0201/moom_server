const { body_part, user_id, body_data } = require("../../models");

const model = {
  body_part,
  body_data,
  user_id,
};

module.exports = {
  post: (req, res) => {
    const sess = req.session;
    const { part_name } = req.body;
    if (sess.userid) {
      try {
        body_part
          .findOrCreate({
            where: { body_part: part_name },
            defaults: {
              body_part: part_name,
              user_id: sess.userid,
            },
          })
          .then(([body_part, created]) => {
            if (!created) {
              return res.status(403).send("해당 커스텀창을 사용 중입니다");
            }
            res.status(200).send("생성에 성공했습니다");
          });
      } catch (e) {
        console.log(e);
        res.status(500).send("생성에 실패했습니다");
      }
    } else {
      res.status(400).send("잘못된 접근입니다");
    }
  },

  put: async (req, res) => {
    const sess = req.session;
    const { part_name, new_name } = req.body;

    if (sess.userid) {
      try {
        const result = await body_part.update(
          { body_part: new_name },
          { where: { body_part: part_name } }
        );
        if (result) {
          res.status(200).send("수정에 성공했습니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("수정에 실패했습니다");
      }
    } else {
      res.status(400).send("잘못된 접근입니다");
    }
  },

  delete: async (req, res) => {
    const sess = req.session;
    const { part_name } = req.body;

    if (sess.userid) {
      try {
        const result = await body_part.destroy({
          where: { body_part: part_name },
        });
        if (result) {
          res.status(200).send("삭제에 성공했습니다");
        }

        const result2 = await body_data.destroy({
          where: { user_id: sess.userid },
        });
        if (result2) {
          console.log("body_port 데이터 초기화완료");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("삭제에 실패했습니다");
      }
    } else {
      res.status(400).send("잘못된 접근입니다");
    }
  },
};
