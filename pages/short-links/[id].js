import Head from "next/head";
import ShortLinkForm, { ShortLinkFormType } from "@/components/ShortLinkForm";
import styles from "@/styles/ShortLinkEditPage.module.css";
import axios from "@/lib/axios";
import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  await dbConnect();

  const { id } = context.query;
  const shortLink = await ShortLink.findById(id);
  if (shortLink) {
    return {
      props: {
        shortLink: JSON.parse(JSON.stringify(shortLink)),
      },
    };
  }
  return {
    notFound: true,
  };
}

export default function ShortLinkEditPage({ shortLink }) {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (values) => {
    axios.patch(`/short-links/${id}`, values);
    router.push("/short-links");
  };

  return (
    <>
      <Head>
        <title>주소 수정하기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>수정하기</h1>
        <ShortLinkForm
          onSubmit={handleSubmit}
          initialValues={shortLink}
          type={ShortLinkFormType.Edit}
        />
      </div>
    </>
  );
}
