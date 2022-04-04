import React, { useState } from "react";
import { Footer, FooterTitle, FooterBody, FooterContainer } from "./Footer";
// import DatePicker from 'react-datepicker';
import InstallationDateBox from "./dateBox";
import { GoLiveDateBox } from "./dateBox";
import NavigationButtons from "../../services/APIPosts/UpdatePOSOrder";

const FooterBar = () => {
  return (
    <>
      <Footer>
        <FooterContainer>
          <FooterTitle>Installation and Go-Live Dates</FooterTitle>
          <FooterBody>
            <div>
              The Installation Date is when the technician will arrive onsite to install your new POS hardware.
            </div>
            <div>
              The Go-Live Date is when you plan on running your first transaction
            </div>
          </FooterBody>
        </FooterContainer>
        <FooterContainer>
          {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}>Installation Date:</DatePicker>  */}
          <div className="footerDateBox">
          <InstallationDateBox/>
          <GoLiveDateBox/>
          </div>
          {/* <div>
            <NavigationButtons/>
          </div> */}
        </FooterContainer>
      </Footer>
    </>
  );
};

export default FooterBar;
