export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      res.status(201).send({
        title: "네이버",
        url: "https://www.naver.com",
      });
      break;

    case "GET":
      res.send([
        {
          id: "1",
          title: "다음",
          url: "https://www.daum.net",
        },
        {
          id: "2",
          title: "구글",
          url: "https://www.google.com",
        },
      ]);
      break;

    default:
      res.status(404).send();
  }
}
