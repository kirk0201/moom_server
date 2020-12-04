const { body_data } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    const sess = req.session;
    const id = req.params.id;
    if (sess.userid) {
      try {
        const result = await body_data.destroy({
          where: {
            id: id,
          },
        });
        if (result) {
          res.status(200).send("삭제 성공");
        } else {
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
