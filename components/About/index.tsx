/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [show, setShow] = useState<boolean>(false);
  const closeJoinUs = () => setShow(false);

  return (
    <>
      <div className=" flex gap-[50px] items-center w-[100%] justify-between overflow-x-hidden px-24 max-xl:hidden">
        <div className="flex rounded-[30px]">
          <Image
            src={"/images/IMG_5263.png"}
            className="rounded-[30px]"
            width={700}
            height={700}
            alt="about image"
          />
        </div>
        <div className="flex flex-col gap-[30px]">
          <p className="text-[48px] font-extrabold"> ABOUT SNOW</p>
          <div className="flex flex-col gap-[15px] items-center justify-center text-[32px] text-black font-semibold p-[10px] bg-slate-500 rounded-[40px]">
            <p className="text-center">
              Prepare to traverse the frosty wilderness with $SNOW ❄️
            </p>
            <p className="text-center">
              We are a squad of elite warriors embarked on clandestine missions
              in the snow.
            </p>
            <p className="text-center">
              $SNOW unveils a world where bravery meets artistry, where every
              warrior's tale is etched in the icy landscapes they roam.
            </p>
            <p className="text-center">
              Make yourself comfortable, the adventure is just getting started.
              ♨️
            </p>
          </div>
        </div>
        <div className="flex rounded-[30px]">
          <Image
            src={"/images/IMG_5245.png"}
            className="rounded-[30px]"
            width={700}
            height={700}
            alt="about image"
          />
        </div>
      </div>
      <div
        className=" flex flex-col gap-[50px] 
      items-center w-[100%] justify-between overflow-x-hidden px-24 xl:hidden max-xs:p-8"
      >
        <div className="flex rounded-[30px]">
          <Image
            src={"/images/IMG_5263.png"}
            className="rounded-[30px]"
            width={700}
            height={700}
            alt="about image"
          />
        </div>
        <div className="flex flex-col gap-[30px]  ">
          <p className="text-[48px] font-extrabold"> ABOUT SNOW</p>
          <div className="flex flex-col gap-[15px] items-center justify-center text-[32px] text-black font-semibold p-[10px] bg-slate-500 rounded-[40px]">
            <p className="text-center">
              Prepare to traverse the frosty wilderness with $SNOW ❄️
            </p>
            <p className="text-center">
              We are a squad of elite warriors embarked on clandestine missions
              in the snow.
            </p>
            <p className="text-center">
              $SNOW unveils a world where bravery meets artistry, where every
              warrior's tale is etched in the icy landscapes they roam.
            </p>
            <p className="text-center">
              Make yourself comfortable, the adventure is just getting started.
              ♨️
            </p>
          </div>
        </div>
        <div className="flex rounded-[30px]">
          <Image
            src={"/images/IMG_5245.png"}
            className="rounded-[30px]"
            width={700}
            height={700}
            alt="about image"
          />
        </div>
      </div>
    </>
  );
}
