module.exports = {
  get: (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      // 로그인(세션 생성)이 되지않은 상태에서 불러오면 userid값이 존재하지 않는다
      req.session.destroy((err) => {
        // session을 제거하기 위한 함수로 인자는 function을 넘겨주면 된다
        if (err) {
          res.status(500).send("로그아웃에 실패했습니다");
        } else {
          res.status(200).send("로그아웃 성공");
        }
      });
    } else {
      res.status(400).send("세션이 없습니다");
    }
  },
};
