/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import Snow from "../Snow";

export default function Gallery() {
  return (
    <div className="min-w-[100%] px-14 md:pt-2 max-xs:p-8">
      <div className="grid justify-items-center">
        <div className="lg:inline-grid grid grid-cols-5 gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              rotate: 720,
              transition: { delay: 1.0, duration: 2.0 },
            }}
            // whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border rounded-lg   ">
              <Image
                src="/icons/snow.png"
                alt="Logo"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              rotate: 720,
              transition: { delay: 1.0, duration: 2.0 },
            }}
            // whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border rounded-lg  ">
              <Image
                src="/icons/snow.png"
                alt="Logo"
                width={400}
                height={400}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 0 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 1.0, duration: 2.0 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2 }}
          >
            <div className="box-border rounded-full ">
              <Image
                src="/images/cha.gif"
                className="rounded-full"
                alt="Logo"
                width={500}
                height={500}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              rotate: 720,
              transition: { delay: 1.0, duration: 2.0 },
            }}
            // whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border rounded-lg  ">
              <Image
                src="/icons/snow.png"
                alt="Logo"
                width={400}
                height={400}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              rotate: 720,
              transition: { delay: 1.0, duration: 2.0 },
            }}
            // whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border rounded-lg   ">
              <Image
                src="/icons/snow.png"
                alt="Logo"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
