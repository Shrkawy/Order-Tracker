import React from 'react'
import {confirmationBar as Stepper} from './ConfirmationBar'

const ConfirmationBar = () => {
  return (
    <Stepper steps={[
      { label: 'Merchant Information' }, 
      { label: 'Taxes & Payments' }, 
      { label: 'Menu & File Upload' }, 
      { label: 'Equipment & Installation' }]}
      activeStep={2}>
    </Stepper>
  );
};

export default ConfirmationBar
