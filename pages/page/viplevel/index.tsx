import Image from "next/image";
import React from "react";
import level1Pic from "@/public/img/VIP1.png";
import level2Pic from "@/public/img/VIP2.png";
import level3Pic from "@/public/img/VIP3.png";
import level4Pic from "@/public/img/VIP4.png";
import PageNavbar from "../../components/P/PageNavbar";
import Head from "next/head";

const VipLevel = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vip Level</title>
      </Head>
      <PageNavbar title="VIP Level" url="/" />

      {/* vip-level-full-detail-cards */}
      <div className="detailed_card bg-[#c5e7ff] px-[20px] pb-[20px] pt-[50px] grid gap-[20px] w-full">
        <div className="full_detail_cards">
          <div className="card_head">
            <div className="card_img_Box">
              <Image src={level1Pic} alt="VIP1-Img" />
            </div>
            <div className="title_detail">
              <h2>VIP1</h2>
              <h3>USDT 0.00</h3>
              <div className="badge">
                <h5>Current</h5>
              </div>
            </div>
          </div>

          <div className="level_card_body">
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
        </div>

        <div className="full_detail_cards">
          <div className="card_head">
            <div className="card_img_Box">
              <Image src={level2Pic} alt="VIP1-Img" />
            </div>
            <div className="title_detail">
              <h2>VIP2</h2>
              <h3>USDT 500.00</h3>
            </div>
          </div>

          <div className="level_card_body">
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
        </div>

        <div className="full_detail_cards">
          <div className="card_head">
            <div className="card_img_Box">
              <Image src={level3Pic} alt="VIP1-Img" />
            </div>
            <div className="title_detail">
              <h2>VIP3</h2>
              <h3>USDT 1500.00</h3>
            </div>
          </div>

          <div className="level_card_body">
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
        </div>

        <div className="full_detail_cards">
          <div className="card_head">
            <div className="card_img_Box">
              <Image src={level4Pic} alt="VIP1-Img" />
            </div>
            <div className="title_detail">
              <h2>VIP4</h2>
              <h3>USDT 5000.00</h3>
            </div>
          </div>

          <div className="level_card_body">
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
        </div>
      </div>
    </>
  );
};

export default VipLevel;
