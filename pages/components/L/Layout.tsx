import React from "react";
import Navbar from "../N/Navbar";
import FooterBar from "../F/FooterBar";

const Layout = ({ children, classMainBox }: any) => {
  return (
    <div className={`${classMainBox} relative`}>
      <Navbar />
      {children}
      <FooterBar />
    </div>
  );
};

export default Layout;
