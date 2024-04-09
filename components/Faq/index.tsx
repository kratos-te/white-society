/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { tokenDetail } from "../../config";
import { PieChart } from "react-minimal-pie-chart";
import { PieChartWithCustomizedLabel } from "../PieChart";

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="flex flex-col gap-[50px]   px-24 max-xs:p-8">
      <div className="flex items-center justify-center">
        <p className="text-[48px] font-extrabold">TOKENOMICS</p>
      </div>
      <div className="flex  items-center justify-center gap-[100px] bg-slate-600 rounded-[40px] p-[20px] text-sky-400 text-[48px] max-md:text-[24px]">
        {/* <div className="flex items-center justify-center">
          <Image
            src={"/images/tokenomics.png"}
            width={600}
            height={600}
            alt="tokenomics"
          />
        </div> */}
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <p className="">$SNOW Distribution</p>
          <div className="flex  gap-[20px] items-center justify-between max-lg:justify-center max-lg:gap-[10px] max-md:hidden">
            <PieChartWithCustomizedLabel />
            <div className="flex flex-col gap-[10px] text-[24px] font-medium ">
              {tokenDetail.map((item, key) => (
                <div key={key} className="flex items-center gap-[10px]">
                  <div
                    className={`rounded-full w-[15px] h-[15px]`}
                    style={{ background: `${item.color}` }}
                  ></div>
                  <div className="text-[28px] font-semibold text-black">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-center justify-between  md:hidden">
            <div className="flex items-center justify-center">
              <PieChartWithCustomizedLabel />
            </div>
            <div className="flex flex-col gap-[10px] text-[24px] font-medium ">
              {tokenDetail.map((item, key) => (
                <div key={key} className="flex items-center gap-[10px]">
                  <div
                    className={`rounded-full w-[10px] h-[10px]`}
                    style={{ background: `${item.color}` }}
                  ></div>
                  <div className="text-[18px] font-semibold text-black">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
