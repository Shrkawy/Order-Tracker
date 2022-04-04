import { useContext, useState } from "react";
import Context from "../../state/Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { BsPlusCircle as AddIcon } from "react-icons/bs";
import DeleteIcon from "@mui/icons-material/Delete";

import { createUUID } from "../../services/APIGets/GetPOSOrder";
import "./merchantinfo.css";

const PhoneNumberBox = (props) => {
  const checkValidation = (value) => {
    return true;

    // TODO: Get validation to work :)
    value = value.length > 0 ? value : props.defaultValue;
    console.log("Validating " + value);
    if (value.match(/^\d{10}$/)) {
      return true;
    }
    return false;
  };
  const handleChange = (event) => {
    props.onChange(event);
    setValidated(checkValidation(event.target.value));
  };

  const [validated, setValidated] = useState(checkValidation(""));
  return (
    <Form.Group>
      <FloatingLabel
        controlId={props.id}
        label={props.label ? props.label : "Phone Number"}
      >
        <Form.Control
          type="tel"
          className={`${validated ? "" : "invalid"} mb-2`}
          id={props.id}
          defaultValue={props.defaultValue}
          onChange={handleChange}
          disabled={props.disabled}
        />
      </FloatingLabel>
    </Form.Group>
  );
};

const TextBox = (props) => {
  if (props.disabled != null) {
    return (
      <Form.Group>
        <FloatingLabel controlId={props.id} label={props.label}>
          <Form.Control
            type="text"
            className="mb-2"
            id={props.id}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            disabled={props.disabled}
          />
        </FloatingLabel>
      </Form.Group>
    );
  } else {
    return (
      <Form.Group>
        <FloatingLabel controlId={props.id} label={props.label}>
          <Form.Control
            type="text"
            className="mb-2"
            id={props.id}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
          />
        </FloatingLabel>
      </Form.Group>
    );
  }
};

const Contact = (props) => {
  const itter = ` ${props.currentIndex}`;

  const handleChange = (event) => {
    const property = event.target.id.split(" ")[0];
    var value;
    if (event.target.value === "on") {
      console.log("on");
      value = event.target.value;
    } else if (event.target.value === "off") {
      value = event.target.value;
      console.log("off");
    } else {
      value = event.target.value;
      console.log(event.target.value);
    }
    props.allContacts[props.currentIndex][property] = value;
    props.contactSetter(props.allContacts);
  };

  const handleRemove = () => {
    props.contactSetter([
      ...[].concat(
        props.allContacts.slice(0, props.currentIndex),
        props.allContacts.slice(
          props.currentIndex + 1,
          props.allContacts.length
        )
      ),
    ]);
  };

  return (
    <Row>
      <Col>
        <TextBox
          id={"name" + itter}
          label="Name*"
          onChange={handleChange}
          defaultValue={props.currentContact.name}
        />
      </Col>
      <Col>
        <TextBox
          id={"email" + itter}
          label="Email Address*"
          onChange={handleChange}
          defaultValue={props.currentContact.email}
        />
      </Col>
      <Col>
        <TextBox
          id={"title" + itter}
          label="Job Title*"
          onChange={handleChange}
          defaultValue={props.currentContact.title}
        />
      </Col>
      <Col>
        <PhoneNumberBox
          id={"phone" + itter}
          label="Phone Number*"
          onChange={handleChange}
          defaultValue={props.currentContact.phone}
        />
      </Col>
      <Col>
        <Form.Check
          type="checkbox"
          id={"receives" + itter}
          label="Receives Text Messages"
          defaultChecked={props.currentContact.receives}
          onChange={handleChange}
        />
      </Col>
      <Col>
        <Button onClick={handleRemove}>
          <DeleteIcon />
        </Button>
      </Col>
    </Row>
  );
};

const ContactRecords = (props) => {
  const { merchantContacts, setMetchantContacts } = useContext(Context);
  return (
    <>
      <Row>
        <h1>Order Contacts</h1>
      </Row>
      <Row>
        <p>
          The contacts listed below will be used for communication during the
          order confirmation, and deployment process. You may add another
          contact to receive notification and updates. Please note that these
          are NOT authorized to make major account changes. You can make changes
          to the Order Contacts list in Lighthouse, which will be described
          later in the POS Order Confirmation.
        </p>
      </Row>
      <Row>
        <Col>
          {merchantContacts.map((contact, index) => {
            return (
              <Contact
                allContacts={merchantContacts}
                contactSetter={setMetchantContacts}
                currentContact={contact}
                currentIndex={index}
                key={contact.key}
              />
            );
          })}
        </Col>
      </Row>
      <Row>
        <Button
          className="repeaterAdd"
          onClick={() => {
            setMetchantContacts(
              [].concat(merchantContacts, [
                {
                  name: "",
                  title: "",
                  email: "",
                  phone: "",
                  receives: false,
                  key: createUUID(),
                },
              ])
            );
          }}
        >
          <AddIcon />
          Add Contact
        </Button>
      </Row>
    </>
  );
};

const BusinessAddress = () => {
  const { merchantID_BA } = useContext(Context);
  const { businessName_BA } = useContext(Context);
  const { address_BA } = useContext(Context);
  const { city_BA } = useContext(Context);
  const { stateOrProvidence_BA } = useContext(Context);
  const { zipCode_BA } = useContext(Context);
  const { phoneNumber_BA } = useContext(Context);

  return (
    <Col sm>
      <Row>
        <h2>Business Address</h2>
      </Row>
      <Row>
        <b>Current Business Information on file.</b>
      </Row>
      <Row>
        <TextBox
          label="Merchant ID"
          id="merchantID_BA"
          defaultValue={merchantID_BA}
          disabled={true}
        />
      </Row>
      <Row>
        <TextBox
          label="Business Name"
          id="businessName_BA"
          defaultValue={businessName_BA}
          disabled={true}
        />
      </Row>
      <Row>
        <TextBox
          label="Address"
          id="address_BA"
          defaultValue={address_BA}
          disabled={true}
        />
      </Row>
      <Row>
        <Col sm="8">
          <TextBox
            label="City"
            id="city_BA"
            defaultValue={city_BA}
            disabled={true}
          />
        </Col>
        <Col sm>
          <TextBox
            label="State"
            id="stateOrProvidence_BA"
            defaultValue={stateOrProvidence_BA}
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <TextBox
            label="Zipcode"
            id="zipCode_BA"
            defaultValue={zipCode_BA}
            disabled={true}
          />
        </Col>
        <Col sm="8">
          <PhoneNumberBox
            id="phoneNumber_BA"
            defaultValue={phoneNumber_BA}
            disabled={true}
          />
        </Col>
      </Row>
    </Col>
  );
};

const ShippingAddress = () => {
  const { businessName_SA, setBusinessName_SA } = useContext(Context);
  const { address_SA, setAddress_SA } = useContext(Context);
  const { city_SA, setCity_SA } = useContext(Context);
  const { stateOrProvidence_SA, setStateOrProvidence_SA } = useContext(Context);
  const { zipCode_SA, setZipCode_SA } = useContext(Context);
  const { phoneNumber_SA, setPhoneNumber_SA } = useContext(Context);

  return (
    <Col sm>
      <Row>
        <h2>Shipping Address</h2>
      </Row>
      <Row>
        <b>Please verify the shipping address is correct.</b>
      </Row>
      <Row>
        <TextBox
          label="Business Name"
          id="businessName_SA"
          defaultValue={businessName_SA}
          onChange={(event) => {
            setBusinessName_SA(event.target.value);
          }}
        />
      </Row>
      <Row>
        <TextBox
          label="Address"
          id="address_SA"
          defaultValue={address_SA}
          onChange={(event) => {
            setAddress_SA(event.target.value);
          }}
        />
      </Row>
      <Row>
        <Col sm={8}>
          <TextBox
            label="City"
            id="address_SA"
            defaultValue={city_SA}
            onChange={(event) => {
              setCity_SA(event.target.value);
            }}
          />
        </Col>
        <Col sm>
          <TextBox
            label="State"
            id="stateOrProvidence_SA"
            defaultValue={stateOrProvidence_SA}
            onChange={(event) => {
              setStateOrProvidence_SA(event.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <TextBox
            label="Zipcode"
            id="zipCode_SA"
            defaultValue={zipCode_SA}
            onChange={(event) => {
              setZipCode_SA(event.target.value);
            }}
          />
        </Col>
        <Col sm={8}>
          <PhoneNumberBox
            id="phoneNumber_SA"
            defaultValue={phoneNumber_SA}
            onChange={(event) => {
              setPhoneNumber_SA(event.target.value);
            }}
          />
        </Col>
      </Row>
    </Col>
  );
};

const MerchantInfo = () => {
  return (
    <Form>
      <Container>
        <Row>
          <Row>
            <h1>Merchant Information</h1>
          </Row>
          <BusinessAddress />
          <ShippingAddress />
        </Row>
        <Row>
          <ContactRecords />
        </Row>
      </Container>
    </Form>
  );
};

export default MerchantInfo;
