import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import vip1Ico from "@/public/img/VIP1.png";
import vip2Ico from "@/public/img/VIP2.png";
import vip3Ico from "@/public/img/VIP3.png";
import vip4Ico from "@/public/img/VIP4.png";

const LevelCard = () => {
  const [showVIP1, setShowVIP1] = useState(true);
  const [showVIP2, setShowVIP2] = useState(false);
  const [showVIP3, setShowVIP3] = useState(false);
  const [showVIP4, setShowVIP4] = useState(false);
  const vip1Click = () => {
    setShowVIP1(true),
      setShowVIP2(false),
      setShowVIP3(false),
      setShowVIP4(false);
  };
  const vip2Click = () => {
    setShowVIP1(false),
      setShowVIP2(true),
      setShowVIP3(false),
      setShowVIP4(false);
  };
  const vip3Click = () => {
    setShowVIP1(false),
      setShowVIP2(false),
      setShowVIP3(true),
      setShowVIP4(false);
  };
  const vip4Click = () => {
    setShowVIP1(false),
      setShowVIP2(false),
      setShowVIP3(false),
      setShowVIP4(true);
  };

  return (
    <div className="level-detail-cardsBox grid justify-items-center w-[100%]">
      <div className="levelDetailCard w-[420px] bg-[#fff] p-[16px] rounded-[12px] transition-all ease-in-out duration-700">
        <div className="cardHeader flex items-center justify-between">
          <h2 className="font-bold text-[18px]">VIP Level</h2>
          <Link href={"/page/viplevel"} className="viewMoreBtn flex items-center gap-2">
            <div className="text-[#0000ff] font-semibold text-[18px]">
              View More
            </div>
            <b className="text-[#000] font-bold text-[22px]">&gt;</b>
          </Link>
        </div>

        <div className="levelImages flex items-center justify-center gap-10 my-[8px]">
          <Image
            src={vip1Ico}
            alt="VIP-ICON"
            className={`${showVIP1 ? "levelactive" : ""}`}
            onClick={vip1Click}
          />
          <Image
            src={vip2Ico}
            alt="VIP-ICON"
            className={`${showVIP2 ? "levelactive" : ""}`}
            onClick={vip2Click}
          />
          <Image
            src={vip3Ico}
            alt="VIP-ICON"
            className={`${showVIP3 ? "levelactive" : ""}`}
            onClick={vip3Click}
          />
          <Image
            src={vip4Ico}
            alt="VIP-ICON"
            className={`${showVIP4 ? "levelactive" : ""}`}
            onClick={vip4Click}
          />
        </div>

        {/* Vip01 */}
        {showVIP1 && (
          <div className="levelShortDetail">
            <h1>VIP01</h1>
            <h2>
              Normal users receive general purpose data collection access.
            </h2>
            <ul>
              <li>
                <b className="text-[24px]">&#x2022;</b> Suitable for most data
                capture scenarios involving light to medium usage
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Profit of 0.5% per
                product -40 tasks per set
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Up to 120 optimise tasks
                per day
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> No access to other
                Premium features
              </li>
            </ul>
          </div>
        )}

        {/* Vip02 */}
        {showVIP2 && (
          <div className="levelShortDetail">
            <h1>VIP02</h1>

            <h2>
              Vip 2 users receive unlimited access to all features of the
              platform.
            </h2>

            <ul>
              <li>
                <b className="text-[24px]">&#x2022;</b> Deposit in accordance
                with our renewal event
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Profit of 1% per task-45
                Optimize products per set
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Better Profit and
                permission
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Up to 135 tasks per day
                can be submitted by Vip 2 users
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Full access to all other
                Premium features
              </li>
            </ul>
          </div>
        )}

        {/* Vip03 */}
        {showVIP3 && (
          <div className="levelShortDetail">
            <h1>VIP03</h1>

            <h2>
              Vip 3 users receive unlimited access to all features of the
              platform.
            </h2>

            <ul>
              <li>
                <b className="text-[24px]">&#x2022;</b> Deposit in accordance
                with our renewal event
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Profit of 1.5% per
                task-50 Optimize products per set
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Better Profit and
                permission
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Up to 150 tasks per day
                can be submitted by Vip 3 users
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Full access to all other
                Premium features
              </li>
            </ul>
          </div>
        )}

        {/* Vip04 */}
        {showVIP4 && (
          <div className="levelShortDetail">
            <h1>VIP04</h1>

            <h2>
              Vip 4 users receive unlimited access to all features of the
              platform.
            </h2>

            <ul>
              <li>
                <b className="text-[24px]">&#x2022;</b> Deposit in accordance
                with our renewal event
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Profit of 2% per task-55
                Optimize products per set
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Better Profit and
                permission
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Up to 165 tasks per day
                can be submitted by Vip 4 users
              </li>
              <li>
                <b className="text-[24px]">&#x2022;</b> Full access to all other
                Premium features
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LevelCard;
