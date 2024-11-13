import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "POST":
      const newShortLink = await ShortLink.create(req.body);
      res.status(201).send(newShortLink);
      break;

    case "GET":
      res.send([
        {
          id: "abc",
          title: "위키피디아 Next.js",
          url: "https://en.wikipedia.org/wiki/Next.js",
        },
        {
          id: "def",
          title: "코드잇 자유게시판",
          url: "https://codeit.kr/community/general",
        },
        {
          id: "ghi",
          title: "코드잇 질문답변",
          url: "https://www.codeit.kr/community/questions",
        },
      ]);
      break;

    default:
      res.status(404).send();
  }
}
