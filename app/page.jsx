"use client";
import Aside from "@/components/Aside";
import Cards from "@/components/Cards";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

export default function Home() {
  const [cards, setCards] = useState([
    {
      image: "Coin",
      title: "Crowd Funding",
      desc: "This is a crowd funding link that will redirect you to new link.",
    },

    {
      image: "PC",
      title: "Crowd Funding",
      desc: "This is a crowd funding link that will redirect you to new link.",
    },
    {
      image: "People",
      title: "Crowd Funding",
      desc: "This is a crowd funding link that will redirect you to new link.",
    },
  ]);

  return (
    <>
      <div className="flex flex-col items-center w-3/4 mx-auto text-center gap-3 my-5">
        <h1 className="text-3xl font-bold">
          Buy Me a{" "}
          <span className="text-4xl bg-gradient-to-r from-orange-400 via-orange-700 to-orange-600 text-white rounded-l-full px-3">
            Chai
          </span>
        </h1>
        <p className="font-semilight">
          This is a crowd funding app were anyone can fund to your favourite
          programmer or coder
        </p>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br  focus:outline-none  shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 outline-0 border-0"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br  focus:outline-none  shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 outline-0 border-0"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="h-[1px] w-screen bg-black opacity-25 z-90"></div>
      <div className="my-7 flex flex-col gap-5">
        {cards.map((item) => {
          return (
            <Cards
              image={item.image}
              title={item.title}
              desc={item.desc}
              key={uuidv4()}
            />
          );
        })}
      </div>
    </>
  );
}
