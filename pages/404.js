import Link from "@/components/Link";

export default function NotFoundPage() {
  return (
    <div>
      없는 페이지이거나, 페이지가 삭제되었습니다.
      <Link href="/">
        <button>홈으로 가기</button>
      </Link>
    </div>
  );
}
