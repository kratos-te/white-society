/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import WavyText from "../../global_componenets/WavyText";
import Link from "next/link";

export default function Story() {
  return (
    <div className="lg:flex flex-col ">
      <div className="flex flex-wrap px-14  ">
        <div className="lg:flex justify-between my-24 pt-24">
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col  items-center pl-[8.75%]   h-auto  lg: w-full  "
          >
            <div className="flex flex-col md: pr-[8.75%]">
              <h1 className="lg:text-[65px] lg:pt-[10%] lg:pb-[3.5%] md: text-[28px]  md: pt-[10%] md: font-[900]    tracking-widest text-indigo-800">
                WTF is <br /> <span className="text-white">$snow</span>
              </h1>
              <h1 className="text-white font-bold text-3xl mt-5">
                The Rise of $snow
              </h1>
              <div className=" pb-[7.1%] ">
                <h1 className="text-indigo-600 font-bold text-xl">
                  The city was in chaos. Buildings crumbled to the ground, and
                  people ran for their lives as $snow, the notorious villain,
                  wreaked havoc in the streets. He was a formidable foe, with
                  powers beyond imagination. His skin was red as fire, and his
                  eyes glowed with an eerie light. He had the ability to conjure
                  flames at will, and he used them to destroy everything in his
                  path.{" "}
                </h1>
                <br />
                <h1 className="text-indigo-600 font-bold text-xl">
                  No one knew where $snow had come from, or what had driven him
                  to such madness. Some said he was a demon from another realm,
                  summoned by dark magic. Others said he was a victim of a cruel
                  experiment gone wrong. But whatever his origins, there was no
                  denying that he was a danger to society.
                </h1>{" "}
                <br />
                <h1 className="text-indigo-600 font-bold text-xl">
                  The police had tried to stop him, but their weapons were
                  useless against his fiery power. The military had been called
                  in, but even they were no match for $snow. It seemed as though
                  nothing could stop him. But then, something unexpected
                  happened. In the midst of his rampage, White Society spotted a
                  young girl, cowering in fear behind a burning car. She was
                  just a child, innocent and helpless. For a moment, $snow
                  hesitated. He had never felt sympathy for anyone before, but
                  something about the girl touched him. He wondered what had
                  brought her into this chaos, and what would become of her if
                  he continued on his destructive path.
                </h1>{" "}
                <br />
                <h1 className="text-indigo-600 font-bold text-xl">
                  That moment of hesitation was all it took for the police to
                  launch a surprise attack. They fired a barrage of bullets at
                  $snow, hoping to catch him off guard. It was a risky move, but
                  it paid off. $snow was hit, and he fell to the ground,
                  weakened...
                </h1>
              </div>
              <Link
                href="/story"
                className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-black transition-all duration-500 font-bold py-4 mb-8   tracking-widest"
              >
                Read Story
              </Link>
            </div>
          </motion.div>

          <div className=" flex-col w-full ">
            <motion.div
              initial={{ opacity: 0, translateX: 20 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="container -space-y-48 ">
                <div className="z-0">
                  <Image
                    src="/images/cha.gif"
                    alt="Logo"
                    className=" border-4 border-indigo-500/100 left-0 rounded-full "
                    width={600}
                    height={600}
                  />
                </div>
                <div className="right-0 z-10">
                  <Image
                    src="/images/cha.gif"
                    alt="Logo"
                    className=" border-4 border-indigo-500/100 left-0 rounded-full "
                    width={600}
                    height={600}
                  />
                </div>
                <div className="z-20">
                  <Image
                    src="/images/cha.gif"
                    alt="Logo"
                    className=" border-4 border-indigo-500/100 left-0 rounded-full "
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <img src="/bright-bg.png" className=" bottom-10" /> */}

      {/* <img src="/logo.png " className="z-0 absolute bottom-20 box-border   rounded-lg  shadow-lg mt-4 border-indigo-700" /> */}
    </div>
  );
}
