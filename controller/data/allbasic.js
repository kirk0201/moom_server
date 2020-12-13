const { body_part, body_data } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      try {
        // 기본 부위
        const basic = [
          "body_fat",
          "chest",
          "hip",
          "shoulder",
          "thigh",
          "waist",
          "weight",
        ];
        let result = {};
        for (let i of basic) {
          // 특정 부위의 id값 찾기
          let { id } = await body_part.findOne({
            where: {
              user_id: sess.userid,
              body_part: i,
            },
            attributes: ["id"],
          });
          // 특정 id에 해당하는 모든 데이터 가져오기
          let body_datas = await body_data.findAll({
            where: {
              user_id: sess.userid,
              body_part_id: id,
            },
          });
          //데이터 에서 값만 가져오기
          if(i === 'body_fat'){
            result.schedule = body_datas.map((i) => {
                return i.schedule.slice(5);
              });
          }
          result[i] = body_datas.map((i) => {
            return i.value;
          });
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
