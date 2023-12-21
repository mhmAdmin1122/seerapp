import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import bellIco from '../../../public/img/bellIcon.png'

const NewsNotificationLine = () => {
  return (
    <div className="news-notification">
      <Image src={bellIco} alt="notification-ico" />
      <Marquee speed={80}>
        <p className="cursor-context-menu">
          To provide every users with the most suitable and reliable
          comprehensive. Thank you for your trust and working with Seer
          Interactive.
        </p>
      </Marquee>
    </div>
  );
};

export default NewsNotificationLine;
