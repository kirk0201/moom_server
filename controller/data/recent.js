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
          //세션과 동일한 유저가쓴 특정 부위의 데이터 다 가져오기
          let recent = await body_data.findAll({
            where: {
              body_part_id: i.id,
              user_id: sess.userid,
            },
          });
          //결과값이 존재한다면 result에 최근값 한개 추가하기
          if (recent.length === 0) {
            result[i.body_part] = null;
          } else {
            result[i.body_part] = recent.pop().value;
          }
        }
        res.status(200).send(result);
      } catch (e) {
        //try문에서 오류가 생겼을시
        console.log(e);
        res.status(500).send("정보를 가져오는데 실패했습니다");
      }
    } else {
      //세션이 없을시
      res.status(404).send("세션이 없습니다");
    }
  },
};
