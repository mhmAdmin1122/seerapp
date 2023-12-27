import Head from "next/head";
import Home from "./components/H/Home";
import { useSession, signIn } from "next-auth/react";
import Regester from "./components/R/Regester";
import FormLayout from "./Regestration/FormLayout/FormLayout";

export default function First() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* <button onClick={() => signOut()}>Sign out</button>
        Signed in as {session?.user?.email} <br />
        Signed in as {session?.user?.name} <br /> */}
        <Head>
          <title>Home || Seer Interactive</title>
        </Head>
        <Home />
        {/* Signed in as <Image src={`${session?.user?.image}`} alt="userpic-avatar-google" width={80} height={80} /> <br /> */}
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
}
