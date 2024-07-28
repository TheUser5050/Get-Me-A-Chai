"use client";
import { changeValue } from "@/lib/features/counter/counterSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Aside = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  return (
    <div
      className={`sm:hidden absolute top-0 z-0 font-semibold text-lg h-screen bg-white  ${
        value ? `w-[75vw] right-0` : `-right-full w-0 `
      } transition-all`}
    >
      <Image
        src="/Cross.svg"
        height={40}
        width={40}
        alt="cross width65"
        className="relative left-[85%]"
        onClick={() => {
          dispatch(changeValue());
        }}
      />
      <ul className="flex flex-col gap-5">
        <li
          className={`border-b-2 border-[#00000036] w-full px-4 ${!value ? "hidden" : ""}`}
        >
          <Link href="/" className="w-full">
            Home
          </Link>
        </li>
        <li
          className={`border-b-2 border-[#00000036] w-full px-4 ${!value ? "hidden" : ""}`}
        >
          <Link href={`/${session && session.user.name}`} className="w-full">
            Your page
          </Link>
        </li>
        <li
          className={`border-b-2 border-[#00000036] w-full px-4 ${!value ? "hidden" : ""}`}
        >
          <Link href="/fund" className="w-full">
            Fund
          </Link>
        </li>
        <li
          className={`border-b-2 border-[#00000036] w-full px-4 ${!value ? "hidden" : ""}`}
        >
          <Link href="/about" className="w-full">
            About Us
          </Link>
        </li>
        <li
          className={`border-b-2 border-[#00000036] w-full px-4 ${!value ? "hidden" : ""}`}
        >
          <Link href="/contact" className="w-full">
            Contact Us
          </Link>
        </li>
        <li
          className={`border-b-2 border-[#00000036] w-full px-4 ${!value ? "hidden" : ""}`}
        >
          <Link href="/login" className="w-full">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
