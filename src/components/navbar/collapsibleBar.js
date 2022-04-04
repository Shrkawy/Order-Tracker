import { useContext, useState } from "react";
import Context from "../../state/Context";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {BsChevronDown} from 'react-icons/bs';
import logo from '../../assets/logo/Shift4_logo.svg';
import chatIcon from '../../assets/icons/LIveChat_icon.svg';
import calendarIcon from '../../assets/icons/Calendar_icon.svg';
import emailIcon from '../../assets/icons/Email_icon.svg';
import phoneIcon from '../../assets/icons/Mobile_icon.svg';
import {Link} from "react-router-dom";

// export default function 
const Collapsible = (props) => {
  // console.log("current step: " + props.currentStep);
  const { salesPhone } = useContext(Context);
  const { salesEmail } = useContext(Context);
  const mailTo = "mailto:" + {salesEmail};
  const callLink = "tel:+" + {salesPhone};

  // function handleChange(){
  //   console.log("Nav Bar Change");
  // }

  return (
    <div className='navHeader'>
      <Accordion
          // defaultExpanded={props.currentStep === 2 ? "false" : "true"}
          // onChange={handleChange()}
          >
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Link to='/'><img src={logo} alt='logo' /></Link>
          <Typography className='navCollapsed'>
            <div className='navTitle'>
              POS Order Support:
            </div>
            <a className='navLink' href="javascript:$zopim.livechat.window.show();">
              <img src={chatIcon} alt='chat' />
              Live Chat
            </a>
            <a className='navLink' href='https://htops-orderreview.youcanbook.me/'>
              <img src={calendarIcon} alt='schedule' id='liveChat' />
              Schedule an Appointment
            </a>
            <a className='navLink' href={mailTo}>
              <img src={emailIcon} alt='email' />
              {salesEmail}
            </a>
            <a className='navLink' href={callLink}>
              <img src={phoneIcon} alt='phone' />
              {salesPhone}
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='navExpanded'>
            <div className='navSection'>
              <div className='navTitle'>
                Ask a Question
              </div>
              <div className='navSubText'>
                For help with questions about your POS order, use our Live Chat feature to be connected to one of our POS Order Administrators.
              </div>
              <button className='navButton'>
                <img src={chatIcon} alt='chat' />
                Live Chat
              </button>
            </div>
            <div className='navSection navBorder'>
              <div className='navTitle'>
                Schedule and Appointment
              </div>
              <div className='navSubText'>
                Use our POS Order Review scheduling tool to review and finalize your order with one of our POS Order Administrators.
              </div>
              <button className='navButton'>
                <img src={calendarIcon} alt='schedule' />
                Schedule an Appointment
              </button>
            </div>
            <div className='navSection navBorder'>
              <div className='navTitle'>
                Contact a Sales Partner
              </div>
              <div className='navSubText'>
              You may contact your Sales Partner who can help answer questions or make changes to your current order.
              </div>
              <div className='navButtonContainer'>
                <button className='navButton'>
                  <img src={emailIcon} alt='email' />
                  johnsmith@shift4.com
                </button>
                <button className='navButton'>
                  <img src={phoneIcon} alt='phone' />
                  1-800-201-0461
                </button>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Collapsible;