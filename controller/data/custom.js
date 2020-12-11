const { body_part, user_id, body_data } = require("../../models");

const model = {
  body_part,
  body_data,
  user_id,
};

module.exports = {
  //새로운 부위 추가
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
        body_parts = body_parts.slice(7, body_parts.length);
        let result = [];
        for (let i of body_parts) {
          let custompart = {
            part_name: i.body_part,
            value: null,
          };
          //세션과 동일한 유저가쓴 특정 부위의 데이터 다 가져오기
          let recent = await body_data.findAll({
            where: {
              body_part_id: i.id,
              user_id: sess.userid,
            },
          });
          //결과값이 존재한다면 result에 최근값 한개 추가하기
          if (recent.length === 0) {
            custompart.value = null;
          } else {
            custompart.value = recent.pop().value;
          }
          result.push(custompart);
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
  post: (req, res) => {
    const sess = req.session;
    const { part_name } = req.body;
    if (sess.userid) {
      try {
        body_part
          .findOrCreate({
            //where 조건으로 찾고 없으면 defaults로 생성함
            where: { body_part: part_name },
            defaults: {
              body_part: part_name,
              user_id: sess.userid,
            },
          })
          .then(([body_part, created]) => {
            if (!created) {
              //같은 이름의 커스텀 부위를 사용할때
              return res.status(403).send("해당 커스텀창을 사용 중입니다");
            }
            res.status(200).send("생성에 성공했습니다");
          });
      } catch (e) {
        console.log(e);
        res.status(500).send("생성에 실패했습니다");
      }
    } else {
      //세션이 없을때
      res.status(400).send("잘못된 접근입니다");
    }
  },

  put: async (req, res) => {
    const sess = req.session;
    const { part_name, new_name } = req.body;
    const basic = [
      "body_fat",
      "chest",
      "hip",
      "shoulder",
      "thigh",
      "waist",
      "weight",
    ];
    if (basic.indexOf(part_name) !== -1) {
      res.status(404).send("기본 부위는 변경이 불가능 합니다.");
    }
    if (sess.userid) {
      try {
        // body_part가 part_name과 동일한 데이터의 body_part를 new_name으로 바꿔주기
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
      //세션이 없을시
      res.status(400).send("잘못된 접근입니다");
    }
  },

  delete: async (req, res) => {
    const sess = req.session;
    const { part_name } = req.body;
    const basic = [
      "body_fat",
      "chest",
      "hip",
      "shoulder",
      "thigh",
      "waist",
      "weight",
    ];
    if (basic.indexOf(part_name) !== -1) {
      res.status(404).send("기본 부위는 변경이 불가능 합니다.");
    }
    console.log(part_name);
    if (sess.userid) {
      try {
        //where에 해당하는 데이터 삭제
        const result = await body_part.destroy({
          where: { body_part: part_name },
        });
        // body_data에 foreign key로 연결된 데이터는 자동 삭제
        if (result) {
          res.status(200).send("삭제에 성공했습니다");
        } else {
          res.status(500).send("삭제에 실패했습니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("삭제에 실패했습니다");
      }
    } else {
      //세션이 없을시
      res.status(400).send("잘못된 접근입니다");
    }
  },
};
