import TickImg from "../images/tick.png";
import ProgressImg from "../images/progress.png";
import React from "react";

const BlurbList = props => {

    const {StageName} = props;
    const Blurb = JSON.parse(props.Blurb);
    
    const getDescription = (blurb) => {
        
        let description = "";
        
        if (StageName === 'Underwriting' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn) {
            description = 'We are working through processing your application. This usually takes 1-2 days! As soon as your application is accepted, you\'ll receive an email with your next steps towards completing your POS Order.';
        }

        if (StageName === 'Underwriting' && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn) {
            description = "Your SkyTab POS Order Application has been Approved!";
        }

        if (StageName === 'Order Administration' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn && blurb.Name === 'Merchant Confirmation Form') {
            description = "The Order is currently waiting on your input to continue. Please follow this link (INSERT LINK HERE) to confirm critical details about your Order.";
        }

        if (StageName === 'Order Administration' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn && blurb.Name !== 'Merchant Confirmation Form') {
            description = "Your Order is being reviewed and your menu is being programmed!";
        }

        if (StageName === 'Order Administration' && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn) {
            description = "Your menu has been programmed and your order has been reviewed!";
        }

        if (StageName === "Onsite Services" && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn) {
            description = "Our team is working on fulfilling your order!";
        }

        if (StageName === "Onsite Services" && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn) {
            description = "Your order has been shipped! Track it using this link (INSERT LINK HERE)";
        }

        if (StageName === "Deployment" && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn) {
            description = "Our team is scheduling your POS Installation with a preferred technician for (INSERT INSTALLATION DATE)";
        }

        if (StageName === "Deployment" && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn) {
            description = "Your Skytab POS has been installed!";
        }

        return description;
    }

    return (
        Blurb.map((blurb, index) => {
            return (
                <div key={index} className='step d-flex'>
                    <div style={{width: '30px', zIndex: '+5'}}>
                        {(blurb.StartedOn && blurb.CompletedOn) ? (
                                <div className='circle circle-filled'>
                                    <div className='icon'>
                                        <img src={TickImg} alt='T'/>
                                    </div>
                                </div>
                            ) :
                            (blurb.StartedOn) ? (
                                <div className='circle'>
                                    <div className='icon'>
                                        <img src={ProgressImg} alt='T'/>
                                    </div>
                                </div>
                            ) : (
                                <div className='circle'/>
                            )}
                    </div>
                    <div className='step-text'>
                        <h4 className='m-0'>{blurb.Name}</h4>
                        {blurb.StartedOn ?
                            <p>
                                <span className='fw-bold me-1'>Start Time:</span>
                                {new Intl.DateTimeFormat('en-US', {
                                    dateStyle: 'full',
                                    timeStyle: 'long'
                                }).format(new Date(blurb.StartedOn))}
                            </p>
                            : null}
                        {blurb.CompletedOn ?
                            <p>
                                <span className='fw-bold me-1'>Complete Time:</span>
                                {new Intl.DateTimeFormat('en-US', {
                                    dateStyle: 'full',
                                    timeStyle: 'long'
                                }).format(new Date(blurb.CompletedOn))}
                            </p>
                            : null}
                        {getDescription(blurb) ? <p className='mt-1'>{getDescription(blurb)}</p> : null}
                    </div>
                </div>
            );
        })
    )
}

export default BlurbList;