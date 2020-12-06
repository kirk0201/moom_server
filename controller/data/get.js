const { body_part, body_data } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    let { part_name } = req.body;
    if (sess.userid) {
      try {
        //where에 해당하는 데이터 가져오기
        let result = await body_part.findOne({
          where: {
            user_id: sess.userid,
            body_part: part_name,
          },
          //attributes에 해당하는 컬럼만 가져오기
          attributes: ["id"],
        });
        //findAll은 결과를 배열 형태로 줌
        let body_datas = await body_data.findAll({
          where: {
            user_id: sess.userid,
            body_part_id: result.id,
          },
        });
        res.status(200).json(body_datas);
      } catch (e) {
        console.log(e);
        res.status(500).send("정보를 가져오는데 실패했습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
