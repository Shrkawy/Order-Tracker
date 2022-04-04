import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './learnmorebar.css';

const LearnMoreBar = () => {
  const handleClick = () => {
    window.open("https://s3.amazonaws.com/Harbortouch_Files/HTMenuSubmission.pdf");
  };
  return (
    <section className='lmb_container'>
    <p className='lmb_text'>
    Review our menu submission guidelines, best practices, and download free POS menu templates.
    </p>
    <Button variant="primary rounded-0" className='lmb_innerbutton' onClick={handleClick}>Learn More</Button>
    </section>
  )
}

export default LearnMoreBar