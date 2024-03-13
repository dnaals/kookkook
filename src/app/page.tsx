import GoogleLogin from "@/components/service/GoogleLogin";
import Link from "next/link";
export default function Home() {

  return (
    <>
      <div className="Login_page">
        <h1>Welcome!</h1>
        <h2>Kook Kook</h2>
        <img src="/images/loginImg.png" alt="asdasd" />
        <GoogleLogin/>
        <Link href='/home'><div><p>비회원로그인</p></div></Link>
      </div>
    </>
  );
}
