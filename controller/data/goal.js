const { body_part } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    let { part_name } = req.query;
    if (sess.userid) {
      try {
        //where에 조건 여러개 추가 가능
        const result = await body_part.findOne({
          where: {
            user_id: sess.userid,
            body_part: part_name,
          },
        });
        if (result) {
          res.status(200).json(result.goal);
        } else {
          //세션이 없을시
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("목표값을 가져오는데 실패했습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
  post: async (req, res) => {
    const sess = req.session;
    const { part_name, value } = req.body;
    if (sess.userid) {
      try {
        //where에 해당하는 데이터 수정
        const result = await body_part.update(
          {
            goal: value,
          },
          {
            where: {
              user_id: sess.userid,
              body_part: part_name,
            },
          }
        );
        if (result) {
          res.status(200).send("목표 설정에 성공했습니다");
        } else {
          //세션이 없을시
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("목표 설정에 실패했습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
  //post와 동일한 동작
  put: async (req, res) => {
    const sess = req.session;
    const { part_name, value } = req.body;
    if (sess.userid) {
      try {
        const result = await body_part.update(
          {
            goal: value,
          },
          {
            where: {
              user_id: sess.userid,
              body_part: part_name,
            },
          }
        );
        if (result) {
          res.status(200).send("목표 설정에 성공했습니다");
        } else {
          //세션이 없을시
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("목표 설정에 실패했습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
  delete: async (req, res) => {
    const sess = req.session;
    const { part_name } = req.body;
    if (sess.userid) {
      try {
        //목표값을 null로 수정
        const result = await body_part.update(
          {
            goal: null,
          },
          {
            where: {
              user_id: sess.userid,
              body_part: part_name,
            },
          }
        );
        if (result) {
          res.status(200).send("목표 삭제에 성공했습니다");
        } else {
          //세션이 없을시
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        //try에서 오류가 생겼을시
        console.log(e);
        res.status(500).send("목표 삭제에 실패했습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
