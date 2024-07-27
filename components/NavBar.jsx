"use client";
import Image from "next/image";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "@/lib/features/counter/counterSlice";

const NavBar = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 backdrop-blur-sm">
      <nav className="flex justify-between h-10 items-center my-1 w-screen sticky top-0 ">
        <div className="flex items-end ">
          <Image src="/Tea.gif" alt="Chai" height={50} width={50} unoptimized />
          <p className="font-bold text-xl">GetMeAChai</p>
        </div>
        <div>
          <ul className="flex gap-5 max-sm:hidden">
            <li>Home</li>
            <li>Fund</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <Image
            src="/hamburger.svg"
            alt="hamburger"
            height={65}
            width={65}
            onClick={() => {
              dispatch(changeValue());
            }}
            className="sm:hidden"
          />
        </div>
      </nav>
      <div className="w-screen h-[1px] bg-black opacity-20"></div>
    </div>
  );
};

export default NavBar;
