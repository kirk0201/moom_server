const { body_data } = require("../../models");

module.exports = {
  put: async (req, res) => {
    const sess = req.session;
    const { value } = req.body;
    //url 뒤쪽에 추가한 숫자를 req.params.id로 가져올수 있음 dataRouter에서 edit 메소드 확인
    const id = req.params.id;
    if (sess.userid) {
      try {
        //where 에 해당하는 데이터 수정
        const result = await body_data.update(
          {
            value: value,
          },
          {
            where: {
              id: id,
            },
          }
        );
        if (result) {
          //수정 성공시
          res.status(200).send("수정 성공");
        } else {
          //수정 실패시
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("수정에 실패하였습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
