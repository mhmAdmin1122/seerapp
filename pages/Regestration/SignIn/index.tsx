import Head from "next/head";
import React from "react";
import FormLayout from "../FormLayout/FormLayout";
import Regester from "@/pages/components/R/Regester";

const SignIn = () => {
  
  return (
    <>
      <Head>
        <title>Regester || Seer Interactive</title>
      </Head>
      <FormLayout hight={"h-auto"}>
        <Regester />
      </FormLayout>
    </>
  );
};

export default SignIn;
