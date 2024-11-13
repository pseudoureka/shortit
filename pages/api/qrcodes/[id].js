export default function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      res.send(id);
      break;

    case "PATCH":
      res.send(id, {
        title: "위키피디아 Next.js",
        url: "https://en.wikipedia.org/wiki/Next.js",
      });
      break;
  }
}
