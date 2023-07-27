import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Image from "next/image";
import KakaoSvg from "./kakao-svg";
import GoogleSvg from "./google-svg";

const Enter: NextPage = () => {
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
          <div className="text-2xl font-medium">회원가입</div>
        </div>
        <div className="mt-3">
          <form className="flex flex-col space-y-4">
            <Input
              name="email"
              label="이메일"
              type="email"
              required
              placeholder="example@ohstock.com"
            />
            <Input name="password" label="비밀번호" type="password" required />
            <Input
              name="password_confirm"
              label="비밀번호 확인"
              type="password"
              required
            />
            <Button text={"가입하기"} />
          </form>
          <div className="mt-8">
            <div className="relative">
              <div className="absolute w-full border-t border-gray-300" />
              <div className="relative -top-3 text-center ">
                <span className="bg-white px-2 text-sm text-gray-500">
                  Or enter with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-2 gap-3">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <KakaoSvg />
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <GoogleSvg />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Enter;
