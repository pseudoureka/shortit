import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  switch (req.method) {
    case "PATCH":
      const updatedShortLink = await ShortLink.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).send(updatedShortLink);
      break;

    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.send(shortLink);
      break;

    case "DELETE":
      const deleteShortLink = await ShortLink.findByIdAndDelete(id);
      res.status(204).send(deleteShortLink);
      return;

    default:
      res.status(404).send();
  }
}
