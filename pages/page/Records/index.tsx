import Head from "next/head";
import Layout from "../../components/L/Layout";
import React, { useState } from "react";

const Records = () => {
  const [allRecords, setAllRecords] = useState(true);
  const [completedRecords, setCompletedRecords] = useState(false);
  const [pendingRecords, setPendingRecords] = useState(false);
  const [frozenRecords, setFrozenRecords] = useState(false);

  const AllRecordsClick = () => {
    setAllRecords(true);
    setCompletedRecords(false);
    setFrozenRecords(false);
    setPendingRecords(false);
  };

  const CompletedRecordsClick = () => {
    setAllRecords(false);
    setCompletedRecords(true);
    setFrozenRecords(false);
    setPendingRecords(false);
  };

  const PendingRecordsClick = () => {
    setAllRecords(false);
    setCompletedRecords(false);
    setPendingRecords(true);
    setFrozenRecords(false);
  };

  const FrozenRecordsClick = () => {
    setAllRecords(false);
    setCompletedRecords(false);
    setPendingRecords(false);
    setFrozenRecords(true);
  };

  return (
    <>
      <Head>
        <title>Records || Seer Interactive</title>
      </Head>
      <Layout classMainBox="layout-solid">
        <div className="Records_box h-screen">
          <div className="Records_Header py-[15px] px-[30px] flex items-center justify-around w-[100%] bg-transparent border-b-[1px] border-[#cddfec] text-[20px] text-[#8aa2bd] font-bold">
            <h2 className={`${allRecords? "text-[#000]" : ""}`} onClick={AllRecordsClick}>All</h2>
            <h2 className={`${completedRecords? "text-[#000]" : ""}`} onClick={CompletedRecordsClick}>Completed</h2>
            <h2 className={`${pendingRecords? "text-[#000]" : ""}`} onClick={PendingRecordsClick}>Pending</h2>
            <h2 className={`${frozenRecords? "text-[#000]" : ""}`} onClick={FrozenRecordsClick}>Frozen</h2>
          </div>

          {allRecords && <div className="Records_Content all_records">all not generated</div>}

          {completedRecords && (
            <div className="Records_Content completed_records">complete not generated</div>
          )}

          {pendingRecords && (
            <div className="Records_Content pending_records">pending not generated</div>
          )}

          {frozenRecords && (
            <div className="Records_Content frozen_records">frozen not generated</div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Records;
