import {useContext, useState} from "react";
import Context from "../../state/Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import ReactPlayer from 'react-player'
import VidImage from "../../assets/images/vid_overlay.png"
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {useNavigate} from "react-router";

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

const SummarySection = () => {
    const {merchantID_BA} = useContext(Context);
    const {businessName_BA} = useContext(Context);
    const {goLiveDate} = useContext(Context);
    const {installationDate} = useContext(Context);

    return (
        <div className="thanksSummary">
            <TextBox
                label="Doing Business As Name:"
                id="businessName_BA"
                defaultValue={businessName_BA}
                disabled={true}
            />
            <TextBox
                label="Merchant ID"
                id="merchantID_BA"
                defaultValue={merchantID_BA}
                disabled={true}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Installation Date"
                    value={installationDate}
                    renderInput={(params) => <TextField {...params} />}
                    disabled='true'
                />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Go-Live Date"
                    value={goLiveDate}
                    renderInput={(params) => <TextField {...params} />}
                    disabled='true'
                />
            </LocalizationProvider>
        </div>
    )
}

const handleClick = () => {
    window.open(
        "https://s3.amazonaws.com/Harbortouch_Files/CustomerSiteReadinessGuide.pdf"
    );
};

const ThankYouPage = () => {

    const navigate = useNavigate();

    return (
        <Form>
            <Container className="thankYou">
                <Row>
                    <h2>
                        Thank you for completing your SkyTab Point of Sale Confirmation Order!
                    </h2>
                </Row>
                <Row>
                    <section className="lmb_container_multi">
                        <p className="lmb_multi_text">
                            What's next?
                            <ul>
                                <li> Your Order Administrator will review the information and contact you if anything
                                    else is required.
                                </li>
                                <li> Register for Lighthouse, your back office command center that allows you to manage
                                    your account and POS system from anywhere.
                                </li>
                            </ul>
                        </p>
                        <Button
                            variant="primary rounded-0"
                            className="lmb_innerbutton_lighthouse"
                            onClick={handleClick}
                        >
                            Lighthouse Registration
                        </Button>
                    </section>
                </Row>
                <Row className='mb-4'>
                    <section className="lmb_container_multi">
                        <p className="lmb_multi_text ms-0 m-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Button
                            variant="primary rounded-0"
                            className="lmb_innerbutton_lighthouse"
                            onClick={() => navigate(`/track/0f9566d5-aa13-11ec-aaa9-0e1d8cb44bd9`)}
                        >
                            Track your order
                        </Button>
                    </section>
                </Row>
                <Row>
                    <img src={VidImage} alt='Video Preview'/>
                    {/* <ReactPlayer url='../../assets/videos/Lighthouse.mp4' /> */}
                </Row>
                <Row>
                    <SummarySection/>
                </Row>

            </Container>
        </Form>
    )
}

export default ThankYouPage;