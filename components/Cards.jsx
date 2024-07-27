import Image from "next/image";

const Cards = (props) => {
  return (
    <>
      <div className="flex flex-col items-center w-3/4 mx-auto rounded-lg bg-gradient-to-r from-[#ffa00964] to-[#c277002a] py-3">
        <Image
          src={`/${props.image}.gif`}
          height={140}
          width={140}
          alt="A Card"
          unoptimized
        />
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-center">{props.desc}</p>
      </div>
    </>
  );
};

export default Cards;
