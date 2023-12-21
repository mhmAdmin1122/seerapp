import Head from "next/head";
import PageNavbar from "../../components/P/PageNavbar";
import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState(true);
  const [withdrawAmountHistory, setWithdrawAmountHistory] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const WithdrawAmountClick = () => {
    setWithdrawAmount(true);
    setWithdrawAmountHistory(false);
  };
  const WithdrawHistoryClick = () => {
    setWithdrawAmount(false);
    setWithdrawAmountHistory(true);
  };

  return (
    <>
      <Head>
        <title>Withdraw || Seer Interactive</title>
      </Head>
      <div className="withdraw">
        <PageNavbar title="Withdraw" url="/" />

        <div className="Withdraw-Box bg-[#c5e7ff]">
          <div className="Withdraw-header-box">
            <h2
              className={`${withdrawAmount ? "text-[#000]" : ""}`}
              onClick={WithdrawAmountClick}
            >
              Withdraw Now
            </h2>

            <h2
              className={`${withdrawAmountHistory ? "text-[#000]" : ""}`}
              onClick={WithdrawHistoryClick}
            >
              Withdraw History
            </h2>
          </div>
          {withdrawAmount && (
            <div className="withdraw-functionForm px-[30px] py-[15px]">
              <div className="withdraw-total_amount">
                <h3>Total Balance</h3>
                <h2>USDT 0.00</h2>
                <p>*Withdrawal processing time is 15-20 minutes</p>
              </div>
              <form className="my-[12px] py-[12px]">
                <div className="form_header">
                  <h1 className="text-[20px] text-[#000] font-bold">
                    Withdraw Method
                  </h1>
                  <h3>Withdrawal will be transferred to Crypto Wallet</h3>
                </div>

                <div className="inputBoxes grid justify-items-center w-[100%]">
                  <div className="form_Input bg-[#fff] py-[15px] rounded-[10px] w-[445px]">
                    <div className="withdrawAmount flex items-center gap-3 px-[20px] w-[100%]">
                      <h2 className="w-[50%] text-[14px]">Withdraw Amount</h2>
                      <input
                        type="text"
                        placeholder="Type Here"
                        className="px-[15px] py-[8px] outline-none text-end w-[50%]"
                      />
                    </div>

                    <hr />

                    <div className="withdrawPass flex items-center gap-3 px-[20px]">
                      <h2 className="w-[50%] text-[14px]">Withdraw Password</h2>
                      <div className="w-[50%] flex items-center gap-[4px]">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          className="px-[10px] py-[6px] w-[90%] outline-none"
                          placeholder="Type Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <h2
                          onClick={togglePasswordVisibility}
                          className="text-[20px] w-[10%]"
                        >
                          {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid justify-items-center w-[100%]">
                  <div className="submit_Btn_Recharge mt-[30px] mb-[40px]">
                    <h2>Submit</h2>
                  </div>
                </div>
              </form>
            </div>
          )}
          {withdrawAmountHistory && (
            <div className="h-screen">
              <p className="py-[20px] px-[30px] border-b-[1px] border-[#cddfec]">*You will receive your withdrawal within an hour</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Withdraw;
