import Image from "next/image";
import Link from "next/link";
import React from "react";
import eventPic from "../../../public/img/event.jpg"

const Event = () => {
  return (
    <div className="eventForm">
      <div className="h-[80px]">
        <Link
          href={"/"}
          className="text-[#2193d0] font-medium cursor-context-menu"
        >
          Seer Interactive
        </Link>
        <h1 className="text-[22px] mt-2">Latest Event</h1>
      </div>
      <div className="eventPic h-[320px]">
        <Image src={eventPic} alt="event-pic" />
      </div>
    </div>
  );
};

export default Event;
