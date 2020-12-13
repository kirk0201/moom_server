const { body_part, body_data } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const sess = req.session;
    const { part_name, value } = req.body;
    if (sess.userid) {
      try {
        //해당하는 body_part의 id 값 가져오기
        const body_part_id = await body_part.findOne({
          where: {
            user_id: sess.userid,
            body_part: part_name,
          },
        });
        //body_part에 id, 세션의 유저아이디, 날짜, value에 해당하는 데이터 생성
        const [result, created] = await body_data.findOrCreate({
          where: {
            schedule: new Date(),
            body_part_id: body_part_id.id,
          },
          defaults: {
            value: value,
            user_id: sess.userid,
          },
        });
        if (created) {
          res.status(200).send("생성 성공");
        } else {
          res.status(400).send("이미 오늘 데이터를 업로드 하셨습니다.");
        }
      } catch (e) {
        //try에서 에러 발생시
        console.log(e);
        res.status(500).send("생성에 실패하였습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
