import Head from "next/head";
import PageNavbar from "../../components/P/PageNavbar";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const Notification = () => {
  return (
    <>
      <Head>
        <title>Notification</title>
      </Head>
      <div>
        <PageNavbar title="Notification" />
        <div className="notification_Box h-screen w-[100%] bg-[#c5e7ff] overflow-scroll overflow-x-hidden px-[40px] py-[30px]">
            {/* notificatoinCard */}
          <div className="notificatoinCard bg-[#fff] flex w-[100%] px-[20px] py-[15px] items-center gap-4 rounded-[12px]">
            <div className="titleanddate w-[95%]">
              <p className="text-[16px] font-bold text-[#000] w-[100%] text-justify">
                Congratulations, you have successfully registered as a Seer
                Interactive{"’"}s optimizations user and received a newcomer
                registration bonus of 0.00 USDT! For future inquiries...
              </p>
              <b className="text-[#999] font-medium text-[16px] w-[100%]">
                2023-DEC-18
              </b>
            </div>
            <div className="moreIcon text-[20px] font-bold text-[#6bbcb4] w-[5%] flex justify-end">
              <FaGreaterThan />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
