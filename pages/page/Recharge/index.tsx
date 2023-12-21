import Head from "next/head";
import PageNavbar from "../../components/P/PageNavbar";
import Link from "next/link";
import React, { useState } from "react";

const Recharge = () => {
  const [rechargeAmount, setRechargeAmount] = useState(true);
  const [rechargeHistory, setRechargeHistory] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [anyHundredUsdtAmount, setAnyHundredUsdtAmount] = useState<any>("");
  const [oneHundred, setOneHundred] = useState(false);
  const [twoHundred, setTwoHundred] = useState(false);
  const [fivHundred, setFivHundred] = useState(false);

  const RechargeAmountClick = () => {
    setRechargeAmount(true);
    setRechargeHistory(false);
  };
  const RechargeHistoryClick = () => {
    setRechargeAmount(false);
    setRechargeHistory(true);
  };
  const SubmitClick = (event: any) => {
    setSubmit((current) => !current);
  };
  const oneHundredAmountClick = () => {
    setAnyHundredUsdtAmount("100.00");
    setOneHundred(true);
    setTwoHundred(false);
    setFivHundred(false);
  };
  const twoHundredAmountClick = () => {
    setAnyHundredUsdtAmount("200.00");
    setOneHundred(false);
    setTwoHundred(true);
    setFivHundred(false);
  };
  const fiveHundredAmountClick = () => {
    setAnyHundredUsdtAmount("500.00");
    setOneHundred(false);
    setTwoHundred(false);
    setFivHundred(true);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recharge || Seer Interactive</title>
      </Head>
      <div className="relative">
        <PageNavbar title="Recharge" url="/"/>
        <div className="Recharge-Box bg-[#c5e7ff] ">
          <div className="rech-header-box">
            <h2
              className={`${rechargeAmount ? "text-[#000]" : ""}`}
              onClick={RechargeAmountClick}
            >
              Recharge Now
            </h2>
            <h2
              className={`${rechargeHistory ? "text-[#000]" : ""}`}
              onClick={RechargeHistoryClick}
            >
              Recharge History
            </h2>
          </div>

          {rechargeAmount && (
            <div className="reacharge_Detail_Box_01 px-[30px] py-[20px]">
              <div className="total_amount">
                <h3>Total Balance</h3>
                <h2>USDT 0.00</h2>
              </div>
              <form className="grid justify-items-center">
                <div className="recharge-amount-card py-[18px] w-full">
                  <h2 className="text-[18px] text-[#000] font-bold">
                    Recharge Amount
                  </h2>

                  <div className="cards_amount flex justify-between w-[100%] flex-wrap gap-[12px] mt-[12px]">
                    <div
                      className={`${
                        oneHundred
                          ? "cards_amount_detail_active"
                          : "cards_amount_detail"
                      }`}
                      onClick={oneHundredAmountClick}
                    >
                      <h2>USDT</h2>
                      <h1>100.00</h1>
                      <h3>Receive 100.00</h3>
                    </div>

                    <div
                      className={`${
                        twoHundred
                          ? "cards_amount_detail_active"
                          : "cards_amount_detail"
                      }`}
                      onClick={twoHundredAmountClick}
                    >
                      <h2>USDT</h2>
                      <h1>200.00</h1>

                      <h3 className="receving_detail">Receive 200.00</h3>
                    </div>

                    <div
                      className={`${
                        fivHundred
                          ? "cards_amount_detail_active"
                          : "cards_amount_detail"
                      }`}
                      onClick={fiveHundredAmountClick}
                    >
                      <h2>USDT</h2>
                      <h1>500.00</h1>
                      <h3 className="receving_detail">Receive 500.00</h3>
                    </div>
                  </div>
                </div>

                <div className="typer_amount my-[12px] w-full">
                  <h1>Recharge Amount</h1>
                  <input
                    type="text"
                    placeholder="Type Here"
                    value={anyHundredUsdtAmount}
                    onChange={(ev: any) =>
                      setAnyHundredUsdtAmount(ev.target.value)
                    }
                  />
                </div>

                <div
                  className="submit_Btn_Recharge mt-[30px] mb-[40px]"
                  onClick={SubmitClick}
                >
                  <h2>Submit</h2>
                </div>
              </form>
            </div>
          )}

          {rechargeHistory && <div className="h-screen recharge-history"></div>}

          {submit && (
            <div className="customer_service_link absolute top-0 z-[500000000] grid justify-items-center w-[100%] items-center h-screen" onClick={SubmitClick}>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=447463064352&text&type=phone_number&app_absent=0"
                }
                target="_blank"
              >
                Customer Service Seer
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Recharge;
