import { useContext, useState } from "react";
import Context from "../../state/Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { BsPlusCircle as AddIcon} from "react-icons/bs";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import { createUUID } from "../../services/APIGets/GetPOSOrder";

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

const Tax = (props) => {
  const handleChange = (event) => {
    const property = event.target.id.split(" ")[0];
    const value = event.target.value;
    props.allTaxes[props.currentIndex][property] = value;
    props.taxSetter(props.allTaxes);
  };

  const handleRemove = () => {
    console.log(
      [].concat(
        props.allTaxes.slice(0, props.currentIndex),
        props.allTaxes.slice(
          props.currentIndex + 1,
          props.currentIndex.length
        )
      )
    );
    props.taxSetter(
      [].concat(
        props.allTaxes.slice(0, props.currentIndex),
        props.allTaxes.slice(
          props.currentIndex + 1,
          props.allTaxes.length
        )
      )
    );
  };

  let itter = ` ${props.currentIndex}`;
  return (
    <Row>
      <Col>
        <TextBox
          id={"name" + itter}
          label="Tax Name*"
          onChange={handleChange}
          defaultValue={props.currentContact.name}
        />
      </Col>
      <Col>
        <TextBox
          id={"rate" + itter}
          label="Rate %*"
          onChange={handleChange}
          defaultValue={props.currentContact.rate}
        />
      </Col>
      <Col>
        <TextBox
          id={"appliedTo" + itter}
          label="Applied to*"
          onChange={handleChange}
          defaultValue={props.currentContact.appliedTo}
        />
      </Col>
      <Col>
        <Form.Check
          type="checkbox"
          id={"included" + itter}
          label="Included in item price?"
          onChange={handleChange}
          defaultChecked={props.currentContact.included}
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

const TaxRecords = (props) => {
  const { taxInfo, setTaxInfo } = useContext(Context);
  return (
    <>
      <Row>
        <h1>Tax & Payment Information</h1>
      </Row>
      <Row>
        <p>
          Please verify the tax and payment information is correct. <b>Please note</b> Shift 4 will configure the POS as described here. The business is responsible to ensure these meet all laws and regulations.
        </p>
      </Row>
      <Row>
        <Col>
          {taxInfo.map((taxItem, index) => {
            return (
              <Tax
                allTaxes={taxInfo}
                taxSetter={setTaxInfo}
                currentContact={taxItem}
                currentIndex={index}
                key={taxItem.key}
              />
            );
          })}
        </Col>
      </Row>
      <Row>
      <Button
        className="repeaterAdd"
          onClick={() => {
            setTaxInfo(
              [].concat(taxInfo, [
                {
                  name: "",
                  appliedTo: "",
                  rate: "",
                  included: false,
                  key: createUUID(),
                },
              ])
            );
          }}
        >
          <AddIcon />
          New Tax
        </Button>
      </Row>
    </>
  );
};

const TippingSection = (props) => {
  const { tipType, setTipType } = useContext(Context);
  return(
  <FormControl>
    <FormLabel id="tippingOptionsController">Please select one</FormLabel>
      <RadioGroup
        aria-labelledby="tippingOptionsController"
        defaultValue={tipType}
        name="tippingOptions"
        onChange={(event) => {
          setTipType(event.target.value);
        }}
      >
      <FormControlLabel value="Tip on Reciept - Guest writes tip amount after payment, tip is adjusted on POS by staff." control={<Radio />} label="Tip on Reciept - Guest writes tip amount after payment, tip is adjusted on POS by staff." />
      <FormControlLabel value="Tip On Device - Guest prompted for tip at time of payment, tip is applied on the PIN Pad by the customer" control={<Radio />} label="Tip On Device - Guest prompted for tip at time of payment, tip is applied on the PIN Pad by the customer" />
      <FormControlLabel value="No Tip - Closes out sale immediately with no tip prompt." control={<Radio />} label="No Tip - Closes out sale immediately with no tip prompt." />
    </RadioGroup>
  </FormControl>
  )
}

const TaxPayment = () => {
  return (
    <Form>
      <Container>
        <Row>
          <Col sm>
            <TaxRecords/>
            <Row>
              <h1>Tipping Options</h1>
            </Row>
            <Row>
              <p>Please select which tipping option you prefer. Only one option can be selected for each location, but this can be changed if desired.</p>
            </Row>
           <TippingSection/>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Form>
  );
};



export default TaxPayment;
