/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-[20px] bg-[url('/images/image.png')] bg-cover   pt-10">
      <div className="relative">
        <Image
          src="/images/cha.gif"
          alt="Logo"
          className="left-0 rounded-full max-sm:w-[300px]"
          width={600}
          height={600}
        />
        <div className="w-full absolute bottom-2 ">
          <p className="text-center text-[48px] text-sky-500  z-20 max-sm:text-[24px] font-extrabold">
            CHECK OUT OUR SOCIALS
          </p>
        </div>
      </div>
      <div className="flex gap-[40px] items-center justify-center rounded-[25px] bg-sky-500 p-[24px] max-sm:p-[12px] z-20">
        <Link href={"https://x.com/whitesocietynft"} target="_blank">
          <TwitterIcon className="text-white cursor-pointer" fontSize="large" />
        </Link>
        <Link href="https://t.me/snowsolana" target="_blank">
          <TelegramIcon className="text-white" fontSize="large" />
        </Link>
      </div>
      <div className="flex bg-white w-full items-center justify-center py-10">
        <p className=" text-center text-[48px] font-normal leading-5   tracking-widest text-cyan-600 max-xs:text-[24px]">
          Copyright 2024, $snow
        </p>
      </div>
    </div>
  );
}
