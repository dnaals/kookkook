"use client";
import MyrecipeReg from "@/components/UIUX/MyrecipeReg";
import GoogleLogin from "@/components/service/GoogleLogin";
import NaverLogin from "@/components/service/NaverLogin";
import Link from "next/link";
export default function Home() {

  return (
    <>
      <div className="Login_page">
        <h1>Kook Kook!</h1>
        <img src="/images/loginImg.png" alt="asdasd" />
        <GoogleLogin/>
        <NaverLogin/>
        <Link href='/home'><div className="b-log"><p>비회원로그인</p></div></Link>
      </div>
    </>
  );
}
