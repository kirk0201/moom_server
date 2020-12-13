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
        result.schedule = ["19990101"];
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
          //제일 최신 정보가 있는 부위의 최근 12일이 result.schedule에 담김
          if (
            body_datas[body_datas.length - 1].schedule >
            result.schedule[result.schedule.length - 1]
          ) {
            result.schedule = body_datas.slice(-12).map((i) => {
              return i.schedule;
            });
          }
        }
        console.log("result.schedule" + result.schedule);
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
          let data = {};
          for(let value of body_datas){
            data[value.schedule] = value.value
          }
          let values = [];
          for (let day of result.schedule) {
            if (data[day]) {
              values.push(data[day]);
            } else {
              values.push(null);
            }
          }
          result[i] = values;
        }
        console.log("result" + result);
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
