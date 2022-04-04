import React, { useContext, useEffect, useState } from "react";
import Context from "../../state/Context";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

const NavigationButtons = (props) => {
  // console.log("UpdatePOSOrder Called");

  const [sent, setSent] = useState("initial");

  //Authentication
  const { sessionID } = useContext(Context);
  const { userToken } = useContext(Context);
  const { taskID } = useContext(Context);

  //Dates
  const { installationDate } = useContext(Context);
  const { goLiveDate } = useContext(Context);

  //Business Address
  const { merchantID_BA } = useContext(Context);
  const { businessName_BA } = useContext(Context);
  const { address_BA } = useContext(Context);
  const { city_BA } = useContext(Context);
  const { stateOrProvidence_BA } = useContext(Context);
  const { zipCode_BA } = useContext(Context);
  const { phoneNumber_BA } = useContext(Context);

  //Shipping Address
  const { businessName_SA } = useContext(Context);
  const { address_SA } = useContext(Context);
  const { city_SA } = useContext(Context);
  const { stateOrProvidence_SA } = useContext(Context);
  const { zipCode_SA } = useContext(Context);
  const { phoneNumber_SA } = useContext(Context);

  //Merchant Contacts
  const { merchantContacts } = useContext(Context);

  //File Upload
  const { specialProgrammingText } = useContext(Context);

  //Equipment
  const { siteReady } = useContext(Context);
  const { constructionReady } = useContext(Context);
  const { powerReady } = useContext(Context);
  const { internetReady } = useContext(Context);
  const { wiredReady } = useContext(Context);

  function convertToBoolean(value) {
    if (value === "on") {
      return true;
    } else {
      return false;
    }
  }

  function convertConstruction(value) {
    if (value === "constructionReviewY") {
      return true;
    } else if (value === "constructionReviewN") {
      return false;
    } else {
      return "";
    }
  }

  function convertPower(value) {
    if (value === "powerReviewY") {
      return true;
    } else if (value === "powerReviewN") {
      return false;
    } else {
      return "";
    }
  }

  function convertInternet(value) {
    if (value === "internetReviewY") {
      return true;
    } else if (value === "internetReviewN") {
      return false;
    } else {
      return "";
    }
  }

  function convertWired(value) {
    if (value === "wiredReviewY") {
      return "Yes";
    } else if (value === "wiredReviewN") {
      return "No";
    } else {
      return "";
    }
  }

  function isCompleted() {
    console.log(props.currentStep);
    if (props.currentStep >= 4) {
      console.log("Submission Completed");
      return true;
    } else {
      console.log("...incomplete");
      return false;
    }
  }

  const orderContacts = merchantContacts.map((value) => {
    return {
      TextMessageEnabled: convertToBoolean(value.receives),
      JobTitle: value.title,
      PhoneNumber: value.phone,
      EmailAddress: value.email,
      Name: value.name,
    };
  });

  //Tax Info
  const { taxInfo } = useContext(Context);
  const { tipType } = useContext(Context);

  const orderTaxInfo = taxInfo.map((value) => {
    return {
      TaxName: value.name,
      AppliedTo: value.appliedTo,
      TaxRate: parseFloat(value.rate),
      IncludedInItemPrice: value.included,
    };
  });

  //JSON Post Blob
  const postJSON = {
    UserToken: userToken,
    TaskId: taskID,
    MerchantID: merchantID_BA,
    ShippingCompanyName: businessName_SA,
    ShippingAddress: address_SA,
    ShippingCity: city_SA,
    ShippingState: stateOrProvidence_SA,
    ShippingZipcode: zipCode_SA,
    ShippingPhoneNumber: phoneNumber_SA,
    Installdate: installationDate,
    GoLiveDate: goLiveDate,
    OrderContacts: orderContacts,
    TaxInformation: orderTaxInfo,
    SpecialProgramming: specialProgrammingText,
    CurrentlyOpen: siteReady,
    ConstructionComplete: convertConstruction(constructionReady),
    POSPowerConnections: convertPower(powerReady),
    HighSpeedInternet: convertInternet(internetReady),
    HardWiredInternet: convertWired(wiredReady),
    ConfirmationComplete: isCompleted(),
    // TippingMethod: tipType,
    // this value overwrites the data in the DB in unexpected ways. 200 post responses are still given. what is the cause of this?
  };

  if (sent == "") {
    setSent("temp");
    axios
      .post(
        "https://wf-dev.shift4.com/Primary/restapi/Flow/e9c6f36d-aaf1-11ec-aaa9-0e1d8cb44bd9?sessionid=NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9&outputtype=RawJson",
        {
          sessionid: "NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9",
          outputtype: "RawJson",
          TaskId: "2eb78b9f-932b-11ec-aaa9-0e1d8cb44bd9",
          UserToken: "d015c563",
          "Content-Type": "application/json",
          MerchantConfirmationObject: postJSON,
        }
      )

      .then((response) => {
        console.log(response.data);
        setSent(response.status);
      });
  }
  return (
    <>
      {props.currentStep > 1 && props.currentStep != 5 && (
        <button
          class="whiteButton"
          onClick={() => {
            setSent("");
            props.updateStep(props.currentStep - 1);
          }}
        >
          <BsArrowLeft />
          Back
        </button>
      )}
      {(props.currentStep === 1 || props.currentStep === 5) && (
        <button className="dummyButton" />
      )}

      <button
        class="blueButton"
        onClick={() => {
          setSent("");
          props.updateStep(props.currentStep + 1);
        }}
      >
        {props.currentStep < 4 && props.nextText}
        {props.currentStep === 4 && props.submitText}
        {props.currentStep >= 5 && props.doneText}
      </button>
    </>
  );
};

export default NavigationButtons;
