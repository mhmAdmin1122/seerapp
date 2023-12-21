import Layout from "./components/L/Layout";
import NewsNotificationLine from "./components/N/NewsNotificationLine";
import Image from "next/image";
import Link from "next/link";
import startingICO from "@/public/img/startingIco.png";
import certICO from "@/public/img/certificateIco.png";
import withdrawICO from "@/public/img/withdrawIco.png";
import rechargingICO from "@/public/img/rechargeIco.png";
import termAndConditionICO from "@/public/img/termConditionIco.png";
import EventsICO from "@/public/img/EventsIco.png";
import FaqIco from "@/public/img/FAQIco.png";
import AboutUSIco from "@/public/img/aboutIco.png";
import LevelCard from "./components/L/LevelCard";
import TermAndCondition from "./components/T/TermAndCondition";
import Event from "./components/E/Event";
import { useState } from "react";
import Faq from "./components/F/Faq";
import AboutUs from "./components/A/AboutUs";
import Head from "next/head";
import Wellcome from "./components/W/Wellcome";
import CopyWriteLine from "./components/C/CopyWriteLine";
import Spacer from "./components/S/Spacer";

export default function Home() {
  const [showTCform, setShowTCform] = useState(false);
  const [showEventform, setShowEventform] = useState(false);
  const [showFAQform, setShowFAQform] = useState(false);
  const [showAboutUsform, setShowAboutUsform] = useState(false);
  const TermClick = (event: any) => {
    setShowTCform((current) => !current);
  };
  const EventClick = (event: any) => {
    setShowEventform((current) => !current);
  };
  const FAQClick = (event: any) => {
    setShowFAQform((current) => !current);
  };
  const AboutUsClick = (event: any) => {
    setShowAboutUsform((current) => !current);
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home || Seer Interactive</title>
      </Head>
      <Layout classMainBox="layout-gradient">
        <NewsNotificationLine />
        <div className="Home-page">
          {/* welcome-box */}
          <Wellcome />

          {/* trigger-btn */}
          <div className="triggerBtnBox">
            <div className="triggerBtn">
              <Link href={"/"}>
                <div>
                  <Image src={startingICO} alt="" />
                </div>
                <h2>STARTING</h2>
              </Link>
              <Link href={"/page/certificate"}>
                <div>
                  <Image src={certICO} alt="" />
                </div>
                <h2>CERT</h2>
              </Link>
              <Link href={"/page/Withdraw"}>
                <div>
                  <Image src={withdrawICO} alt="" />
                </div>
                <h2>WITHDRAW</h2>
              </Link>
              <Link href={"/page/Recharge"}>
                <div>
                  <Image src={rechargingICO} alt="" />
                </div>
                <h2>RECHARGE</h2>
              </Link>
              <div onClick={TermClick}>
                <div>
                  <Image src={termAndConditionICO} alt="" />
                </div>
                <h2>TERM AND CONDITION</h2>
              </div>
              <div onClick={EventClick}>
                <div>
                  <Image src={EventsICO} alt="" />
                </div>
                <h2>EVENTS</h2>
              </div>
              <div onClick={FAQClick}>
                <div>
                  <Image src={FaqIco} alt="" />
                </div>
                <h2>FAQ</h2>
              </div>
              <div onClick={AboutUsClick}>
                <div>
                  <Image src={AboutUSIco} alt="" />
                </div>
                <h2>ABOUT US</h2>
              </div>
            </div>
          </div>

          <LevelCard />

          {/* Copy-write line */}
          <CopyWriteLine />

          {/* Term Condition Form */}
          {showTCform && (
            <div
              className="fixed w-[100%] top-[0px] z-[600000] transition-all duration-1000"
              onClick={TermClick}
            >
              <div className="grid justify-items-center items-center w-[100%] h-screen bg-[#00000080]">
                <TermAndCondition />
              </div>
            </div>
          )}

          {/* Event Form */}
          {showEventform && (
            <div
              className="fixed w-[100%] top-[0px] z-[600000] transition-all duration-1000"
              onClick={EventClick}
            >
              <div className="grid justify-items-center items-center w-[100%] h-screen bg-[#00000080]">
                <Event />
              </div>
            </div>
          )}

          {/* FAQ Form */}
          {showFAQform && (
            <div
              className="fixed w-[100%] top-[0px] z-[600000] transition-all duration-1000"
              onClick={FAQClick}
            >
              <div className="grid justify-items-center items-center w-[100%] h-screen bg-[#00000080]">
                <Faq />
              </div>
            </div>
          )}

          {/* AboutUs Form */}
          {showAboutUsform && (
            <div
              className="fixed w-[100%] top-[0px] z-[600000] transition-all duration-1000"
              onClick={AboutUsClick}
            >
              <div className="grid justify-items-center items-center w-[100%] h-screen bg-[#00000080]">
                <AboutUs />
              </div>
            </div>
          )}

          <Spacer />
        </div>
      </Layout>
    </>
  );
}
