import ShortLink from "@/db/models/ShortLink";
import { redirect } from "next/dist/server/api-utils";
import { notFound } from "next/navigation";

const { default: dbConnect } = require("@/db/dbConnect");

export async function getServerSideProps(context) {
  const { shortUrl } = context.query;
  await dbConnect();
  const shortLink = await ShortLink.findOne({ shortUrl });

  if (shortLink)
    return {
      redirect: {
        destination: shortLink.url,
        permanent: false,
      },
    };

  return {
    notFound: true,
  };
}

export default function ShortUrlPage() {
  return null;
}
