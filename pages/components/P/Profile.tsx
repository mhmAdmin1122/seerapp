import PageNavbar from "../../components/P/PageNavbar";
import React, { useState } from "react";
import Image from "next/image";
import userAvatar from "@/public/img/userimgseer.jpg";
import levelpic from "@/public/img/VIP1.png";
import rechargePic from "@/public/img/rechargeIco.png";
import withdrawPic from "@/public/img/withdrawIco.png";
import transactionPic from "@/public/img/transaction.png";
import editProfilePic from "@/public/img/editprofile.png";
import WithdrawUpdatePic from "@/public/img/withdrawUpdate.png";
import contactservicePic from "@/public/img/contactservice.png";
import NotificationPic from "@/public/img/bellIcon.png";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";
import CopyWriteLine from "@/pages/components/C/CopyWriteLine";
import { signOut } from "next-auth/react";

const Profile = ({data}:any) => {
  const [submit, setSubmit] = useState(false);

  const SubmitClick = (event: any) => {
    setSubmit((current) => !current);
  };
  return (
    <div className="relative">
      <div>
        <PageNavbar title="Profile" url="/" />
      </div>
      <div className="profilemainBox">
        <div className="uperBox h-screen px-[30px] py-[20px] grid justify-items-center w-[100%]">
          <div className="userAbout-box flex items-center justify-center gap-4 mt-[35px]">
            <div className="userPic_avatar w-[65px] h-[65px] rounded-full overflow-hidden">
              <Image
                src={userAvatar}
                alt="user-avatar"
                className="w-[100%] h-[100%]"
              />
            </div>

            <div className="userName_inviteCode grid justify-items-start">
              <div className=" flex items-center justify-center gap-3">
                <h2 className="text-[20px] font-bold">{data?.user?.name}</h2>
                <div className="ImageBox w-[35px] h-[35px]">
                  <Image
                    src={levelpic}
                    alt="user-avatar"
                    className="w-[100%] h-[100%]"
                  />
                </div>
              </div>

              <div className="userInvite_code">
                <h3 className="text-[14px] font-bold">
                  Invitation code: 23OKC3
                </h3>
              </div>
            </div>
          </div>

          <div className="userAmountAbout-box flex items-center justify-around mt-[35px] w-[500px] gap-3">
            <div className="profitAmountBox px-4 py-2 grid justify-items-center">
              <h2>Today profits</h2>
              <h1 className="text-[18px] font-bold">{"(USDT)"}</h1>
              <h3>0.00</h3>
            </div>
            <div className="totalBalanceBox px-4 py-2 grid justify-items-center border-l-[1px] border-[#cddfec]">
              <h2>Total Account Balance</h2>
              <h1 className="text-[18px] font-bold">{"(USDT)"}</h1>
              <h3>0.00</h3>
            </div>
          </div>

          <div className="mainCard-box grid w-[400px] mt-[35px] bg-[#fff] px-[20px] py-[15px] rounded-[12px]">
            <div className="mainCardParts Transaction w-[100%]">
              <h2 className="text-[20px] font-bold mb-[10px]">Transaction</h2>
              <Link
                href={"/page/Recharge"}
                className="flex items-center justify-between w-[100%] py-[15px] border-t-[1px] border-[#f3f3f3]"
              >
                <div className="imageBox flex items-center gap-2">
                  <Image
                    src={rechargePic}
                    alt="recharge-icon"
                    className="w-[25px] h-[25.99px]"
                  />
                  <div className="titleline">Recharge</div>
                </div>
                <div className="icon text-[#4ab980]">
                  <FaGreaterThan />
                </div>
              </Link>

              <Link
                href={"/page/Withdraw"}
                className="flex items-center justify-between w-[100%] py-[15px] border-y-[1px] border-[#f3f3f3]"
              >
                <div className="imageBox flex items-center gap-2">
                  <Image
                    src={withdrawPic}
                    alt="recharge-icon"
                    className="w-[25px] h-[25.99px]"
                  />
                  <div className="titleline">Withdraw</div>
                </div>
                <div className="icon text-[#4ab980]">
                  <FaGreaterThan />
                </div>
              </Link>

              <Link
                href={"/page/transaction"}
                className="flex items-center justify-between w-[100%] py-[15px] border-b-[1px] border-[#f3f3f3]"
              >
                <div className="imageBox flex items-center gap-2">
                  <Image
                    src={transactionPic}
                    alt="recharge-icon"
                    className="w-[25px] h-[25.99px]"
                  />
                  <div className="titleline">Transaction</div>
                </div>
                <div className="icon text-[#4ab980]">
                  <FaGreaterThan />
                </div>
              </Link>
            </div>

            <div className="mainCardParts Profile">
              <h2 className="text-[20px] font-bold mb-[10px]">Profile</h2>
              <Link
                href={"/page/Recharge"}
                className="flex items-center justify-between w-[100%] py-[15px] border-b-[1px] border-[#f3f3f3]"
              >
                <div className="imageBox flex items-center gap-2">
                  <Image
                    src={editProfilePic}
                    alt="recharge-icon"
                    className="w-[25px] h-[25.99px]"
                  />
                  <div className="titleline">Edit Profile Details</div>
                </div>
                <div className="icon text-[#4ab980]">
                  <FaGreaterThan />
                </div>
              </Link>

              <Link
                href={"/page/Withdraw"}
                className="flex items-center justify-between w-[100%] py-[15px] border-b-[1px] border-[#f3f3f3]"
              >
                <div className="imageBox flex items-center gap-2">
                  <Image
                    src={WithdrawUpdatePic}
                    alt="recharge-icon"
                    className="w-[25px] h-[25.99px]"
                  />
                  <div className="titleline">Update Withdrawal Details</div>
                </div>
                <div className="icon text-[#4ab980]">
                  <FaGreaterThan />
                </div>
              </Link>
            </div>

            <div className="mainCardParts About_Us">
              <h2 className="text-[20px] font-bold mb-[10px]">About Us</h2>
              <div className="flex items-center justify-between w-[100%] py-[15px] border-b-[1px] border-[#f3f3f3]">
                <div className="imageBox flex items-center gap-2">
                  <Image
                    src={contactservicePic}
                    alt="recharge-icon"
                    className="w-[25px] h-[25.99px]"
                  />
                  <div className="titleline" onClick={SubmitClick}>
                    Contact Us
                  </div>
                </div>
                <div className="icon text-[#4ab980]">
                  <FaGreaterThan />
                </div>
              </div>

              <Link
                href={"/page/notification"}
                className="flex items-center justify-between w-[100%] py-[15px] border-b-[1px] border-[#f3f3f3]"
              >
                <div className="imageBox flex items-center gap-2">
                  <Image
                    src={NotificationPic}
                    alt="recharge-icon"
                    className="w-[25px] h-[25.99px]"
                  />
                  <div className="titleline">Notification</div>
                </div>
                <div className="icon text-[#4ab980]">
                  <FaGreaterThan />
                </div>
              </Link>
            </div>

            <button
              className="text-[#ff0000] font-bold py-[10px] text-[18px]"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>

          {/* Copy-write line */}
          <CopyWriteLine />
        </div>

        <div className="lowerbox bg-[#c5e7ff] h-[350px] w-[100%]"></div>
      </div>
      {submit && (
        <div
          className="customer_service_link absolute top-[70vh] z-[500000000] grid justify-items-center w-[100%] items-center h-screen"
          onClick={SubmitClick}
        >
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
  );
};

export default Profile;
