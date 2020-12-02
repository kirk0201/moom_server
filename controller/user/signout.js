const { user } = require("../../models");

module.exports = {
  delete: (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      user
        .destroy({
          where: { id: sess.userid },
        })
        .then((result) => {
          console.log("result:" + result);
          // 회원 탈퇴후 세션 삭제
          req.session.destroy((err) => {
            if (err) {
              res.status(500).send("회원 탈퇴에 실패했습니다");
            } else {
              res.status(200).send("회원 탈퇴 성공");
            }
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send("회원 탈퇴에 실패했습니다");
        });
    } else {
      res.status(404).send("세션이 없습니다");
    }
  },
};
