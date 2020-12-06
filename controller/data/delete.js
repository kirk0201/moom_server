const { body_data } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    const sess = req.session;
    //url 뒤쪽에 추가한 숫자를 req.params.id로 가져올수 있음 dataRouter에서 delete 메소드 확인
    const id = req.params.id;
    if (sess.userid) {
      try {
        //where에 해당하는 데이터 삭제
        const result = await body_data.destroy({
          where: {
            id: id,
          },
        });
        if (result) {
          //삭제 성공시
          res.status(200).send("삭제 성공");
        } else {
          //삭제 실패시
          res.status(400).send("잘못된 접근입니다");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send("삭제에 실패하였습니다");
      }
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
