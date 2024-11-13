export default function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "PATCH":
      res.status(201).send(id);
      break;

    case "GET":
      res.send(id);
      break;

    case "DELETE":
      res.status(204).send(id);
      return;

    default:
      res.status(404).send();
  }
}
