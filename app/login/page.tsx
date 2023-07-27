import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Image from "next/image";

const Login: NextPage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <section className="w-80">
        <div className="flex flex-col items-center space-y-10">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="OHSTOCK Logo"
            priority
          />
        </div>
        <div className="mt-7">
          <form className="flex flex-col space-y-4">
            <Input name="email" type="email" required placeholder="이메일" />
            <Input
              name="password"
              type="password"
              required
              placeholder="비밀번호"
            />
            <Button text={"로그인"} />
          </form>
          <div className="mt-5">
            <div className="pt-2 flex justify-center text-sm text-gray-500 border-t border-gray-300">
              <span>아이디(이메일) 찾기</span>
              <span className="block w-[1px] h-[11px] mx-2 relative top-[4px] pointer-events-none bg-gray-600" />
              <span>비밀번호 찾기</span>
              <span className="block w-[1px] h-[11px] mx-2 relative top-[4px] pointer-events-none bg-gray-600" />
              <span>회원가입</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
