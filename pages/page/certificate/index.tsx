import React from "react";
import Image from "next/image";
import pic from "@/public/img/certificatePicSeer.jpg";
import PageNavbar from "../../components/P/PageNavbar";
import Head from "next/head";

const Certificate = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cert || Seer Interactive</title>
      </Head>
      <PageNavbar title="Cert" />
      <div className="CertificateImage-Box bg-[#c5e7ff] grid justify-items-center py-[50px]">
        <Image src={pic} alt="" />
      </div>
    </>
  );
};

export default Certificate;
