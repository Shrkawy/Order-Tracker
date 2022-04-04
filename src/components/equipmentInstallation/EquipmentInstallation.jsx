import React, { useState, useEffect, useContext, Component } from "react";
import Context from "../../state/Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "react-bootstrap/Button";
import "./EquipmentInstallation.css";
import { useRadioGroup } from "@mui/material/RadioGroup";

//API Get test//
import axios from "axios";
// import { MuiRadioButton } from "./MuiRadioButton";

axios
  .get(
    "https://wf-dev.shift4.com/Primary/restapi/Flow/4599413d-9336-11ec-aaa9-0e1d8cb44bd9?sessionid=NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9&outputtype=RawJson&TaskId=2eb78b9f-932b-11ec-aaa9-0e1d8cb44bd9&UserToken=d015c563"
  )
  .then((response) => {
    console.log(response.data.MerchantQuestionnaire.Equipment);
  });

const EquipmentListItem = (props) => {
  return (
    <li class="list-group-item d-flex border-bottom">
      <span id="qty_line" class="d-inline-flex">
        {props.value2}
      </span>
      <span class="d-inline-flex">{props.value1}</span>
    </li>
  );
};

const EquipInstall = (props) => {
  const [equipmentnames, setEquipmentnames] = useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://wf-dev.shift4.com/Primary/restapi/Flow/4599413d-9336-11ec-aaa9-0e1d8cb44bd9?sessionid=NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9&outputtype=RawJson&TaskId=2eb78b9f-932b-11ec-aaa9-0e1d8cb44bd9&UserToken=d015c563"
      )
      .then((response) => {
        console.log(response);
        setEquipmentnames(response.data.MerchantQuestionnaire.Equipment);
      });
  }, []);

  // if (equipmentnames.ProductName.length === 0) return "";

  const handleClick = () => {
    window.open(
      "https://s3.amazonaws.com/Harbortouch_Files/CustomerSiteReadinessGuide.pdf"
    );
  };

  // function handleClickRadio(event) {
  //   if (event.target.value === value) {
  //     setValue("");
  //   } else {
  //     setValue(event.target.value);
  //   }
  // }

  const MuiRadioButton = (props) => {
    const { siteReady, setSiteReady } = useContext(Context);
    const { constructionReady, setConstructionReady } = useContext(Context);
    const { powerReady, setPowerReady } = useContext(Context);
    const { internetReady, setInternetReady } = useContext(Context);
    const { wiredReady, setWiredReady } = useContext(Context);
    // const [checked, setChecked] = useState(false);
    // const { radioValue, setRadioValue } = useContext(Context);
    function handleUnClickQ1(event) {
      if (event.target.value === siteReady) {
        console.log("this the same value as clicked " + event.target.value);
        setSiteReady("");
      } else {
        if (event.target.name === "orderReviewq1") {
          setSiteReady(event.target.value);
          console.log(
            "this is not the same value as clicked" + event.target.value
          );
        }
      }
    }

    function handleUnClickQ2(event) {
      if (event.target.value === constructionReady) {
        console.log("this the same value as clicked " + event.target.value);
        setConstructionReady("");
      } else {
        if (event.target.name === "orderReviewq2") {
          setConstructionReady(event.target.value);
          console.log(
            "this is not the same value as clicked" + event.target.value
          );
        }
      }
    }

    function handleUnClickQ3(event) {
      if (event.target.value === powerReady) {
        console.log("this the same value as clicked " + event.target.value);
        setPowerReady("");
      } else {
        setPowerReady(event.target.value);
        console.log(
          "this is not the same value as clicked" + event.target.value
        );
      }
    }

    function handleUnClickQ4(event) {
      if (event.target.value === internetReady) {
        console.log("this the same value as clicked " + event.target.value);
        setInternetReady("");
        console.log("this is the same value as clicked " + internetReady.value);
      } else {
        setInternetReady(event.target.value);
        console.log(
          "this is not the same value as clicked" + event.target.value
        );
      }
    }

    function handleUnClickQ5(event) {
      if (event.target.value === wiredReady) {
        console.log("this the same value as clicke " + event.target.value);
        setWiredReady("");
        console.log("this is the same value as clicked " + wiredReady.value);
      } else {
        setWiredReady(event.target.value);
        console.log(
          "this is not the same value as clicked" + event.target.value
        );
      }
    }
    return (
      <FormControl>
        <div className="orderReviewController">
          <FormLabel id="orderReviewController" className="yeslabel">
            Yes
          </FormLabel>
          <FormLabel id="orderReviewController" className="nolabel">
            No
          </FormLabel>
        </div>
        <RadioGroup
          row
          aria-labelledby="orderReviewController"
          // defaultValue={siteReady}
          value={siteReady}
          name="radiogrouporderReviewq1"
          label="Yes"
        >
          <FormControlLabel
            name="orderReviewq1"
            value="True"
            id="q1Y"
            control={<Radio />}
            label=""
            defaultValue={true}
            onClick={handleUnClickQ1}
            // checked={siteReady == siteReadyY}
          />
          <FormControlLabel
            name="orderReviewq1"
            value="False"
            id="q1N"
            control={<Radio />}
            label="Is the site ready to open for business?"
            defaultValue={false}
            onClick={handleUnClickQ1}
          />
        </RadioGroup>
        <RadioGroup
          row
          aria-labelledby="orderReviewController"
          // defaultValue={""}
          name="orderReviewq2"
          value={constructionReady}
        >
          <FormControlLabel
            value="constructionReviewY"
            id="q2Y"
            control={<Radio />}
            label=""
            defaultValue={true}
            onClick={handleUnClickQ2}
          />
          <FormControlLabel
            value="constructionReviewN"
            id="q2N"
            control={<Radio />}
            label="Has all construction been completed where the POS system will be located? "
            defaultValue={false}
            onClick={handleUnClickQ2}
          />
        </RadioGroup>
        <RadioGroup
          row
          aria-labelledby="orderReviewController"
          value={powerReady}
          name="orderReviewq3"
        >
          <FormControlLabel
            value="powerReviewY"
            id="q3Y"
            control={<Radio />}
            label=""
            defaultValue={true}
            onClick={handleUnClickQ3}
          />
          <FormControlLabel
            value="powerReviewN"
            id="q3N"
            control={<Radio />}
            label="Does the site have power connections available for each POS station?"
            defaultValue={false}
            onClick={handleUnClickQ3}
          />
        </RadioGroup>
        <RadioGroup
          row
          aria-labelledby="orderReviewController"
          value={internetReady}
          name="orderReviewq4"
        >
          <FormControlLabel
            value="internetReviewY"
            id="q4Y"
            control={<Radio />}
            label=""
            defaultValue={true}
            onClick={handleUnClickQ4}
          />
          <FormControlLabel
            value="internetReviewN"
            id="q4N"
            control={<Radio />}
            label="Does the site have a high speed internet connection?"
            defaultValue={true}
            onClick={handleUnClickQ4}
          />
        </RadioGroup>
        <RadioGroup
          row
          aria-labelledby="orderReviewController"
          value={wiredReady}
          name="orderReviewq5"
        >
          <FormControlLabel
            value="wiredReviewY"
            id="q5Y"
            control={<Radio />}
            label=""
            defaultValue={true}
            onClick={handleUnClickQ5}
          />

          <FormControlLabel
            value="wiredReviewN"
            id="q5N"
            control={<Radio />}
            label="Does the site contain wired connections for the POS access?"
            defaultValue={true}
            onClick={handleUnClickQ5}
          />
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <Form>
      <Container>
        <Row>
          <Col sm>
            <Row>
              <h1>Equipment</h1>
            </Row>
            <Row>
              <p>List of equipment and items in your order being processed.</p>
            </Row>
            <div className="topBar">
                <span className="qty_header">Qty</span> <span className="productName_header">Product Name</span>
            </div>
            <Row>
              <Col className="listColumn">
                {/* <div className="topBar">Equipment Name</div> */}
                <ul className="equipment_list" class="list-group list-group-flush">
                  {equipmentnames.map((equipment, index) => {
                    return (
                      <EquipmentListItem
                        li
                        key={index}
                        value1={equipment.ProductName}
                        value2={equipment.Qty}
                      />
                    );
                  })}
                </ul>
              </Col>
            </Row>
            <section className="lmb_container">
              <p className="lmb_text">
                Review our Customer Site Readniness Guide.
              </p>
              <Button
                variant="primary rounded-0"
                className="lmb_innerbutton"
                onClick={handleClick}
              >
                Learn More
              </Button>
            </section>
            <Row>
              <h1>Onsite & Installation</h1>
            </Row>
            <Row>
              <p>
                We want to ensure that the POS system can be installed quickly
                after shipping to ensure for the best possible onboarding
                process. We recommend that you review or update the projected
                Go-Live Date. As well as review our{" "}
                <span className="links">
                  <a
                    href="https://s3.amazonaws.com/Harbortouch_Files/CustomerSiteReadinessGuide.pdf"
                    target="_blank"
                    id="equipment_links"
                  >
                    {" "}
                    Customer Site Readiness Guide{" "}
                  </a>
                </span>{" "}
                for more detailed information on what to expect on the day of
                the POS installation.
              </p>
            </Row>

            {/* Yellow panel starts here */}
            <div className="yellowInfoPanel">
              <Row>
                <h4>Important Information regarding your order.</h4>
              </Row>
              <Row>
                <ul>
                  <li>
                    If the POS equipment arrives your account will have billing
                    triggered, even if it is not being used.
                  </li>
                  <li>
                    If the installer arrives onsite and the business site is not
                    ready for install, you will be charged for a revisit.
                  </li>
                  <li>
                    If the proper network cabling is not in place you will be
                    charged for install of the cable runs.
                  </li>
                  <li>
                    A hard wired connection for your primary internet is
                    recommended over a wireless connection for best performance.
                  </li>
                  <li>
                    Please review the{" "}
                    <span className="links">
                      <a
                        href="https://s3.amazonaws.com/Harbortouch_Files/CustomerSiteReadinessGuide.pdf"
                        target="_blank"
                        id="equipment_links"
                      >
                        {" "}
                        Customer Site Readiness Guide{" "}
                      </a>
                    </span>{" "}
                    if you have any questions or concerns.
                  </li>
                </ul>
              </Row>
            </div>
            {/* Yellow panel ends here */}
            <MuiRadioButton />
            {/* yes/no boxes here */}
            <Row>
              <h1>Send for Order Preparation</h1>
            </Row>
            <Row>
              <p>
                Once you have completed this Point of Sale Confirmation, it will
                be reviewed to ensure everything is complete and can begin
                building your POS system menu. An associate will reach out via
                phone or email if they have any questions. The contacts you
                setup at the beginning of this questionnaire will also receive
                email and text notifications with order status updates. If there
                are any potential issues listed above, there may be a delay in
                the fulfillment of your order. You can view progress of your
                order by logging into your Lighthouse account, explained on the
                next page.
              </p>
            </Row>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Form>
  );
};

export default EquipInstall;
