import Head from "next/head";
import PageNavbar from "../../components/P/PageNavbar";
import React from "react";

const Transaction = () => {
  return (
    <>
      <Head>
        <title>Transaction || Seer Interactive</title>
      </Head>
      <div className="Transaction-box relative">
        <PageNavbar title="Transaction"/>
        <div className="transaction_content h-screen bg-[#c5e7ff]"></div>
      </div>
    </>
  );
};

export default Transaction;
