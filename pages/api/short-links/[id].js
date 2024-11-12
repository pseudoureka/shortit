export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.send("ShortLink 조회");
      break;

    case "PATCH":
      res.send("ShortLink 수정");
      break;

    case "POST":
      res.send("ShortLink 생성");
      break;

    default:
      res.send();
      break;
  }
}
