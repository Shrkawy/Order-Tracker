import React, { useContext, useEffect } from "react";
import Context from "../../state/Context";
import axios from "axios";

export function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const GetUploadedFiles = (setUploadFile) => {
  axios
    .get(
      "https://wf-dev.shift4.com/Primary/restapi/Flow/4599413d-9336-11ec-aaa9-0e1d8cb44bd9?sessionid=NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9&outputtype=RawJson&TaskId=2eb78b9f-932b-11ec-aaa9-0e1d8cb44bd9&UserToken=d015c563"
    )
    .then((response) => {
      setUploadFile(response.data.MerchantQuestionnaire.Files);
      // setUploadFile = response.data.MerchantQuestionnaire.Files;
      // come back to test in prod
    });
};

const GetPOSOrder = (props) => {
  // Status
  const { setCurrentlyOpen } = useContext(Context);

  // Nav elements
  const { setSalesPhone } = useContext(Context);
  const { setSalesEmail } = useContext(Context);

  //Business Address
  const { setMerchantID_BA } = useContext(Context);
  const { setBusinessName_BA } = useContext(Context);
  const { setAddress_BA } = useContext(Context);
  const { setCity_BA } = useContext(Context);
  const { setStateOrProvidence_BA } = useContext(Context);
  const { setZipCode_BA } = useContext(Context);
  const { setPhoneNumber_BA } = useContext(Context);

  //Shipping Address
  const { setBusinessName_SA } = useContext(Context);
  const { setAddress_SA } = useContext(Context);
  const { setCity_SA } = useContext(Context);
  const { setStateOrProvidence_SA } = useContext(Context);
  const { setZipCode_SA } = useContext(Context);
  const { setPhoneNumber_SA } = useContext(Context);

  //Dates
  const { installationDate, setInstallationDate } = useContext(Context);
  const { goLiveDate, setGoLiveDate } = useContext(Context);

  //Merchant Contacts
  const { merchantContacts, setMetchantContacts } = useContext(Context);

  //Tax Info
  const { taxInfo, setTaxInfo } = useContext(Context);
  const { tipType, setTipType } = useContext(Context);

  const { loaded, setLoaded } = useContext(Context);

  //File Upload
  const { upLoadFile, setUploadFile } = useContext(Context);
  const { specialProgrammingText, setSpecialProgrammingText } = useContext(Context);

  //Equipment
  const { siteReady, setSiteReady } = useContext(Context);
  const { constructionReady, setConstructionReady } = useContext(Context);
  const { powerReady, setPowerReady } = useContext(Context);
  const { internetReady, setInternetReady } = useContext(Context);
  const { wiredReady, setWiredReady } = useContext(Context);

  function convertSiteReady(value){
    console.log(value);
    if(value){
      console.log("off");
      return("off");
    }
    else{
      console.log("on");
      return("on");
    }
  }

  function convertConstruction(value){
    if (value === "True"){return("constructionReviewY");}
    else if(value === "False"){return("constructionReviewN");}
    else {return("");}
  }

  function convertPower(value){
    if (value === "True"){return("powerReviewY");}
    else if(value === "False"){return("powerReviewN");}
    else {return("");}
  }

  function convertInternet(value){
    if (value === "True"){return("internetReviewY");}
    else if(value === "False"){return("internetReviewN");}
    else {return("");}
  }

  function convertWired(value){
    if (value === "Yes"){return("wiredReviewY");}
    else if(value === "No"){return("wiredReviewN");}
    else {return("");}
  }

  useEffect(() => {
    if (loaded) return;
    console.log("Get POS Order called");
    axios
      .get(
        "https://wf-dev.shift4.com/Primary/restapi/Flow/4599413d-9336-11ec-aaa9-0e1d8cb44bd9?sessionid=NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9&outputtype=RawJson&TaskId=2eb78b9f-932b-11ec-aaa9-0e1d8cb44bd9&UserToken=d015c563"
      )
      .then((response) => {
        //Status
        setCurrentlyOpen(response.data.MerchantQuestionnaire.CurrentlyOpen);

        // Nav data
        setSalesEmail(response.data.MerchantQuestionnaire.SalesOfficeEmail);
        setSalesPhone(response.data.MerchantQuestionnaire.SalesOfficePhoneNumber);

        // Set Business Address Data
        setMerchantID_BA(response.data.MerchantQuestionnaire.MerchantID);
        setBusinessName_BA(response.data.MerchantQuestionnaire.DBAName);
        setAddress_BA(response.data.MerchantQuestionnaire.BusinessAddress);
        setCity_BA(response.data.MerchantQuestionnaire.BusinessCity);
        setStateOrProvidence_BA(
          response.data.MerchantQuestionnaire.BusinessState
        );
        setZipCode_BA(response.data.MerchantQuestionnaire.BusinessZipcode);
        setPhoneNumber_BA(
          response.data.MerchantQuestionnaire.BusinessPhoneNumber
        );

        // Set Shipping Address Data
        setBusinessName_SA(
          response.data.MerchantQuestionnaire.ShippingCompanyName
        );
        setAddress_SA(response.data.MerchantQuestionnaire.ShippingAddress);
        setCity_SA(response.data.MerchantQuestionnaire.ShippingCity);
        setStateOrProvidence_SA(
          response.data.MerchantQuestionnaire.ShippingState
        );
        setZipCode_SA(response.data.MerchantQuestionnaire.ShippingZipcode);
        setPhoneNumber_SA(
          response.data.MerchantQuestionnaire.ShippingPhoneNumber
        );

        // Set Dates
        setInstallationDate(response.data.MerchantQuestionnaire.InstallDate);
        setGoLiveDate(response.data.MerchantQuestionnaire.GoLiveDate);
        
        // Set Merchant Contact Info
        const newMerchantContacts = [];

        for (const [
          index,
          value,
        ] of response.data.MerchantQuestionnaire.OrderContacts.entries()) {
          newMerchantContacts.push({
            name: value.Name,
            title: value.JobTitle,
            email: value.EmailAddress,
            phone: value.PhoneNumber,
            receives: value.TextMessageEnabled,
            // receives: convertToCheckbox(value.TextMessageEnabled),
            key: createUUID(),
          });
        }
        setMetchantContacts(newMerchantContacts);
        // setMetchantContacts(response.data.MerchantQuestionnaire.OrderContacts.entries().map((value) => {
        //     return ({
        //         name : value.Name,
        //         title: value.JobTitle,
        //         email: value.EmailAddress,
        //         phone: value.PhoneNumber,
        //         receives: value.NotificationsEnabled,
        //     })
        // }));

        // set Tax Records Info
        setTipType(response.data.MerchantQuestionnaire.TippingOptions[0].tipDesc);

        const newTaxRecords = [];

        for (const [
          index,
          value,
        ] of response.data.MerchantQuestionnaire.TaxInformation.entries()) {
          newTaxRecords.push({
            name: value.TaxName,
            appliedTo: value.AppliedTo,
            rate: value.TaxRate,
            included: value.IncludedInItemPrice,
            key: createUUID(),
          });
        }
        setTaxInfo(newTaxRecords);

        //File Upload Page
        setSpecialProgrammingText(response.data.MerchantQuestionnaire.SpecialProgramming)
        GetUploadedFiles(setUploadFile);

        // Equipment
        setSiteReady(response.data.MerchantQuestionnaire.CurrentlyOpen);
        setConstructionReady(convertConstruction(response.data.MerchantQuestionnaire.ConstructionComplete));
        setPowerReady(convertPower(response.data.MerchantQuestionnaire.POSPowerConnections));
        setInternetReady(convertInternet(response.data.MerchantQuestionnaire.HighSpeedInternet));
        setWiredReady(convertWired(response.data.MerchantQuestionnaire.HardWiredInternet));

      });
    setLoaded(true);
  }, []);


  return <div />;
};

export default GetPOSOrder;
