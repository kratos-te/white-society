/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Snow from "../Snow";

export default function Landing() {
  return (
    <div className="flex items-center justify-between  h-full p-24 max-xs:p-8">
      <div className="flex flex-col w-full gap-[50px] justify-between p-12 bg-[url('/images/IMG_6137.png')] rounded-[50px] bg-cover max-sm:p-4">
        <div className="lg:flex">
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col  items-center h-[100%] lg: w-full "
          >
            <div className="flex flex-col md: pr-[8.75%]">
              <h1 className="lg:text-[65px] lg:pt-[10%] lg:pb-[3.5%] md: text-[42px]  md: pt-[10%] md: font-[900]    tracking-widest text-sky-400">
                $snow
              </h1>
              {/* <div className="text-[24px] pb-[7.1%] text-white font-black ">
              </div> */}
            </div>
          </motion.div>

          <div className=" flex-col overflow-hidden w-full">
            <motion.div
              initial={{ opacity: 0, translateX: 20 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="container">
                <Image
                  src="/images/cha.gif"
                  alt="Logo"
                  className=" border-4 border-indigo-500/100 left-0 rounded-full "
                  width={600}
                  height={600}
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex gap-[50px] items-center justify-center max-lg:hidden z-20">
          <Link
            href="https://raydium.io/swap/"
            target="_blank"
            className="flex gap-[10px] items-center px-[36px] py-[20px] bg-white border-sky-700 border-[3px] rounded-[30px] cursor-pointer"
          >
            <p className="text-[24px] font-semibold text-sky-400 cursor-pointer">
              BUY ON RAYDIUM
            </p>
            <Image
              src={"/icons/raidyum.svg"}
              width={50}
              height={50}
              alt="raidyum icon"
              className="w-[50px] h-[50px]"
            />
          </Link>
          <Link href={"https://dexscreener.com/"} target="_blank">
            <div className="flex gap-[10px] items-center px-[36px] py-[20px] bg-white border-sky-700 border-[3px] rounded-[30px]  cursor-pointer">
              <p className="text-[24px] font-semibold text-sky-400">
                DEXSCREENER
              </p>
              <Image
                src={"/icons/dexscreener.png"}
                width={50}
                height={50}
                alt="raidyum icon"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-center z-20  lg:hidden">
          <Link href={"https://raydium.io/swap/"} target="_blank">
            <div className="flex justify-center w-full gap-[10px] items-center px-[36px] py-[14px] bg-white border-sky-700 border-[3px] rounded-[30px] cursor-pointer">
              <p className="text-[18px] font-semibold text-sky-400">
                BUY ON RAYDIUM
              </p>
              <Image
                src={"/icons/raidyum.svg"}
                width={30}
                height={30}
                alt="raidyum icon"
                className="w-[30px] h-[30px]"
              />
            </div>
          </Link>
          <Link href={"https://dexscreener.com/"} target="_blank">
            <div className="flex justify-center w-full  gap-[10px] items-center px-[36px] py-[14px] bg-white border-sky-700 border-[3px] rounded-[30px] cursor-pointer">
              <p className="text-[18px] font-semibold text-sky-400">
                DEXSCREENER
              </p>
              <Image
                src={"/icons/dexscreener.png"}
                width={30}
                height={30}
                alt="raidyum icon"
                className="w-[30px] h-[30px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
