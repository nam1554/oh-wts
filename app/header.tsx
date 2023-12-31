"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@libs/client/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Backtesting", href: "/backtesting" },
  { name: "Trading", href: "/trading" },
];

const Header = () => {
  const pathname = usePathname();
  const open = navigation.some((menu) => menu.href.startsWith(pathname));
  return (
    <header
      className={classNames(
        "sticky top-0 z-20 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600",
        open ? "block" : "hidden"
      )}
    >
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="OHSTOCK Logo"
            priority
          />
        </Link>
        <div className="flex md:order-2">
          <span className="text-gray-900 dark:text-white font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0">
            <Link href={"/login"}>로그인</Link>
          </span>
          <button
            type="button"
            className="text-white bg-ohstock-color1 hover:bg-ohstock-color0 focus:ring-1 focus:outline-none focus:ring-ohstock-color0 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            <Link href={"/enter"}>회원가입</Link>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((menu, index) => {
              const isActive = pathname.startsWith(menu.href);
              return (
                <li key={index}>
                  <Link
                    href={menu.href}
                    className={classNames(
                      "block py-2 pl-3 pr-4 rounded md:p-0",
                      isActive
                        ? "text-white bg-ohstock-color1 md:bg-transparent md:text-ohstock-color1 md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-ohstock-color1 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    )}
                    aria-current="page"
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
