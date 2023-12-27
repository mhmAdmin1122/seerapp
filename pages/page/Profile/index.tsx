import React from "react";
import Head from "next/head";
import Profile from "@/pages/components/P/Profile";
import { useSession, signIn } from "next-auth/react";
import FormLayout from "@/pages/Regestration/FormLayout/FormLayout";
import Regester from "@/pages/components/R/Regester";

const ProfilePage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Head>
          <title>Profile || Seer Interactive</title>
        </Head>
        <Profile data={session} />
      </>
    );
  }

  return (
    <>
      <FormLayout hight={"h-auto"}>
        <Regester />
      </FormLayout>
    </>
  );
};

export default ProfilePage;
