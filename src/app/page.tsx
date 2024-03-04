"use client";
import MyrecipeReg from "@/components/UIUX/MyrecipeReg";
import GoogleLogin from "@/components/service/GoogleLogin";
import Link from "next/link";
// import '@/components/style/login.scss'
export default function Home() {

  return (
    <>
      <div>
        이게 로그인 페이지<br />
        <GoogleLogin/>
        {/* <MyrecipeReg/> */}


        <Link href='/home'>비회원로그인</Link>
      </div>
    </>
  );
}
