import Link from "next/link";
import React from "react";

const TermAndCondition = () => {
  return (
    <div className="termForm">
      <div className="h-[80px]">
        <Link
          href={"/"}
          className="text-[#2193d0] font-medium cursor-context-menu"
        >
          Seer Interactive
        </Link>
        <h1 className="text-[22px] mt-2">Terms Conditions</h1>
      </div>
      <div className="rules h-[320px]">
        <h2>Contract Rules:</h2>
        <div>
          <h3>
            1{")"} To optimize and reset your account, you must first complete
            all ratings with a minimum amount of USDT 50 and a minimum account
            reset amount of USDT 100.
          </h3>
          <h3>
            1.1{")"} If you need to reset your account, you must contact our
            online service to reset your account after you have completed all
            your optimization and withdrawn your funds.
          </h3>
          <h3>
            2{")"} User withdrawals and system withdrawal requirements /
            security of user funds
          </h3>
          <h3>
            2.1{")"} Each user needs to complete all the optimization rating
            before they can meet the system withdrawal requirements.
          </h3>
          <h3>
            2.2{")"} In order to avoid any loss of funds, all withdrawals are
            processed automatically by the system and not manually.
          </h3>
          <h3>
            2.3{")"} All users are not allowed to apply for withdrawal in the
            middle of task to avoid affecting the merchant{"'"}s operation.
          </h3>
          <h3>
            2.4{")"} User{"'"}s funds are completely safe on the Platform and the
            Platform will be liable for any accidental loss.
          </h3>
          <h3>
            3{")"} Please do not disclose your account password and withdrawal
            password to others. The platform will not be held responsible for
            any loss or damage caused.
          </h3>
          <h3>
            3.1{")"} All users are advised to keep their accounts secure to
            avoid disclosure.
          </h3>
          <h3>
            3.2{")"} The Platform is not responsible for any accidental
            disclosure of accounts.
          </h3>
          <h3>
            3.3{")"} Because of the financial implications of the accounts, it
            is important not to disclose them to avoid unnecessary problems.
          </h3>
          <h3>
            3.4{")"} Withdrawal password It is recommended that you do not set a
            birthday password, ID card number or mobile phone number, etc. It is
            recommended that you set a more difficult password to protect your
            funds.
          </h3>
          <h3>
            3.5{")"} If you forget your password, you can reset it by contacting
            the online service and be sure to change it yourself afterwards.
          </h3>
          <h3>
            4{")"} Optimization rating are randomly assigned by the system and
            therefore cannot be changed, canceled, controlled or skipped in any
            way.
          </h3>
          <h3>
            4.1{")"} Due to a large number of users on the platform, it is not
            possible to distribute group purchase items manually, so all group
            purchase items are distributed randomly by the system.
          </h3>
          <h3>
            4.2{")"} Group purchase/combination items are randomly released by
            the system and cannot be changed/cancelled/skipped by any
            user/staff.
          </h3>
          <h3>
            5{")"} Legal action will be taken in the event of misuse of the
            account.
          </h3>
          <h3>
            6{")"} Each item comes from a different merchant, no deposit for
            more than 10 minutes, and each deposit must be made with the online
            service to confirm the merchant{"'"}s cryptocurrency wallet address.
          </h3>
          <h3>
            7{")"} The platform will not be held responsible for any deposits
            made to the wrong wallet address.
          </h3>
          <h3>
            8{")"} Each time optimization rating, the user is required to
            complete it within 2 hours, if it is not completed without notifying
            the merchant to apply for a time extension, resulting in complaints
            from the merchant, the user is liable for breach of contract.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
