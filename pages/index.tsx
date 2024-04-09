"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Landing from "../components/Landing/index";
import Gallery from "../components/Gallery/index";
import About from "../components/About";
import Faq from "../components/Faq";
import Snow from "../components/Snow";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  // const handleShow = () => {
  //   setProgress(progress + 2);
  // };
  useEffect(() => {
    setTimeout(() => {
      setProgress(progress + 2);
      console.log("progress", progress);
    }, 100);
    if (progress >= 100) {
      setProgress(100);
      setTimeout(() => {
        setLoading(true);
      }, 400);
    }
  }, [progress]);
  return (
    <>
      {!loading ? (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black max-sm:p-2 bg-[url('/landing.gif')] bg-cover">
          <div className="flex flex-col w-[300px] items-center justify-center gap-[20px] max-sm:w-full">
            <Image
              src="/images/cha.gif"
              alt="main image"
              className="rounded-full"
              width={259}
              height={259}
            />
            <p className=" text-[20px] text-white">{progress}%</p>
            <div className="flex w-full items-center justify-center rounded-[20px] border-[2px] border-white relative">
              <div
                className={`absolute items-start left-0 justify-center h-[24px] bg-sky-400 rounded-[20px]`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </main>
      ) : (
        <div className="h-max">
          <Snow />
          <div className="flex flex-col gap-[30px] bg-gradient-to-r from-white to-sky-500 h-max">
            <Landing />
            <Gallery />
            <About />
            <Faq />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
