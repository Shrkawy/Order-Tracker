import React, { useState } from "react";

import Context from "./Context";

const Provider = ({ children }) => {
  // Status
  const [currentlyOpen, setCurrentlyOpen] = useState("");

  // Nav elements
  const [salesPhone, setSalesPhone] = useState("");
  const [salesEmail, setSalesEmail] = useState("");

  // API Authentication
  const [sessionID, setSessionID] = useState(
    "NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9"
  ); // Should be moved so it is undiscoverable in the browser
  const [userToken, setUserToken] = useState("d015c563"); //Hard-coded for testing
  const [taskID, setTaskID] = useState("2eb78b9f-932b-11ec-aaa9-0e1d8cb44bd9"); //Hard-coded for testing

  // Dates
  const [installationDate, setInstallationDate] = useState("");
  const [goLiveDate, setGoLiveDate] = useState("");

  // Business Address Details
  const [merchantID_BA, setMerchantID_BA] = useState("");
  const [businessName_BA, setBusinessName_BA] = useState("");
  const [address_BA, setAddress_BA] = useState("");
  const [city_BA, setCity_BA] = useState("");
  const [stateOrProvidence_BA, setStateOrProvidence_BA] = useState("");
  const [zipCode_BA, setZipCode_BA] = useState("");
  const [phoneNumber_BA, setPhoneNumber_BA] = useState("");

  // Shipping address details
  const [merchantID_SA, setMerchantID_SA] = useState("");
  const [businessName_SA, setBusinessName_SA] = useState("");
  const [address_SA, setAddress_SA] = useState("");
  const [city_SA, setCity_SA] = useState("");
  const [stateOrProvidence_SA, setStateOrProvidence_SA] = useState("");
  const [zipCode_SA, setZipCode_SA] = useState("");
  const [phoneNumber_SA, setPhoneNumber_SA] = useState("");

  // Merchant info Contacts
  const [merchantContacts, setMetchantContacts] = useState([]);

  //Tax info Records
  const [taxInfo, setTaxInfo] = useState([]);
  const [tipType, setTipType] = useState("");

  //API load state (for MVP only -- system should be improved in production)
  const [loaded, setLoaded] = useState(false);

  //FileUpload Page
  const [specialProgrammingText, setSpecialProgrammingText] = useState("");
  const [uploadFile, setUploadFile] = useState([]);

  //Equipment Page
  const [siteReady, setSiteReady] = useState(""
  //   [
  //   {
  //     question: "Is the site ready to open for business?",
  //     answer: "no",
  //     key: "siteReady",
  //   },
  //   {
  //     question:
  //       "Has all construction been completed where the POS system will be located? ",
  //     answer: "no",
  //     key: "q2",
  //   },
  //   {
  //     question:
  //       "Does the site have power connections available for each POS station?",
  //     answer: "no",
  //     key: "q3",
  //   },
  //   {
  //     question: "Does the site have a high speed internet connection?",
  //     answer: "no",
  //     key: "q4",
  //   },
  //   {
  //     question: "Does the site contain wired connections for the POS access?",
  //     answer: "no",
  //     key: "q5",
  //   },
  // ]
  );
  const [constructionReady, setConstructionReady] = useState("");
  const [powerReady, setPowerReady] = useState("");
  const [internetReady, setInternetReady] = useState("");
  const [wiredReady, setWiredReady] = useState("");

  const value = {
    //Status
    currentlyOpen,
    setCurrentlyOpen,
    //Nav elements
    salesPhone,
    setSalesPhone,
    salesEmail,
    setSalesEmail,
    //API Authentication
    sessionID,
    setSessionID,
    userToken,
    setUserToken,
    taskID,
    setTaskID,
    //Dates
    installationDate,
    setInstallationDate,
    goLiveDate,
    setGoLiveDate,
    //Business Address
    merchantID_BA,
    setMerchantID_BA,
    businessName_BA,
    setBusinessName_BA,
    address_BA,
    setAddress_BA,
    city_BA,
    setCity_BA,
    stateOrProvidence_BA,
    setStateOrProvidence_BA,
    zipCode_BA,
    setZipCode_BA,
    phoneNumber_BA,
    setPhoneNumber_BA,
    //Shipping Address
    merchantID_SA,
    setMerchantID_SA,
    businessName_SA,
    setBusinessName_SA,
    address_SA,
    setAddress_SA,
    city_SA,
    setCity_SA,
    stateOrProvidence_SA,
    setStateOrProvidence_SA,
    zipCode_SA,
    setZipCode_SA,
    phoneNumber_SA,
    setPhoneNumber_SA,
    merchantContacts,
    setMetchantContacts,
    // Tax info
    taxInfo,
    setTaxInfo,
    tipType,
    setTipType,
    // API Load State
    loaded,
    setLoaded,
    // File Upload
    specialProgrammingText,
    setSpecialProgrammingText,
    uploadFile,
    setUploadFile,
    // Equipment Page
    siteReady,
    setSiteReady,
    constructionReady,
    setConstructionReady,
    powerReady, 
    setPowerReady,
    internetReady, 
    setInternetReady,
    wiredReady,
    setWiredReady
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
