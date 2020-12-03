const {
  user,
  custom1,
  custom2,
  custom3,
  custom4,
  custom5,
} = require("../../models");

const model = {
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
      try {
        let userdata = await user.findOne({
          where: {
            id: sess.userid,
          },
          attributes: ["custom1", "custom2", "custom3", "custom4", "custom5"],
        });
        let result = {};
        for (let i in userdata.dataValues) {
          if (userdata.dataValues[i] !== null) {
            result[i] = { name: userdata.dataValues[i] };
          }
        }
        if (result.custom1 !== undefined) {
          result.custom1.value = await custom1.findAll({
            where: {
              user_id: sess.userid,
            },
          });
          result.custom1.value = result.custom1.value.pop().value;
        }
        if (result.custom2 !== undefined) {
          result.custom2.value = await custom2.findAll({
            where: {
              user_id: sess.userid,
            },
          });
          result.custom2.value = result.custom2.value.pop().value;
        }
        if (result.custom3 !== undefined) {
          result.custom3.value = await custom3.findAll({
            where: {
              user_id: sess.userid,
            },
          });
          result.custom3.value = result.custom3.value.pop().value;
        }
        if (result.custom4 !== undefined) {
          result.custom4.value = await custom4.findAll({
            where: {
              user_id: sess.userid,
            },
          });
          result.custom4.value = result.custom4.value.pop().value;
        }
        if (result.custom5 !== undefined) {
          result.custom5.value = await custom5.findAll({
            where: {
              user_id: sess.userid,
            },
          });
          result.custom5.value = result.custom5.value.pop().value;
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
  post: async (req, res) => {
    const sess = req.session;
    const { body_part, value } = req.body;
    if (sess.userid) {
      try {
        const result = await user.findOne({
          where: { id: sess.userid },
        });
        if (result.dataValues[body_part] === null) {
          const result1 = await user.update(
            { [body_part]: value },
            { where: { id: sess.userid } }
          );
          if (result1) {
            res.status(200).send("생성에 성공했습니다");
          }
        } else {
          res.status(403).send("해당 커스텀창을 사용 중입니다");
        }
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
    const { body_part, value } = req.body;

    if (sess.userid) {
      try {
        const result = await user.update(
          { [body_part]: value },
          { where: { id: sess.userid } }
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
    const { body_part } = req.body;

    if (sess.userid) {
      try {
        const result = await user.update(
          { [body_part]: null },
          { where: { id: sess.userid } }
        );
        if (result) {
          res.status(200).send("삭제에 성공했습니다");
        }

        const result2 = await model[body_part].destroy({
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
