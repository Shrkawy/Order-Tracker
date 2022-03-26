import TickImg from "../images/tick.png";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const BlurbList = props => {

    const {StageName} = props;
    const Blurb = JSON.parse(props.Blurb).sort((a, b) => a.SequenceIndex - b.SequenceIndex);
    
    const getDescription = (blurb) => {
        
        let description = "";
        
        if (StageName === 'Underwriting' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn) {
            description = 'We are working through processing your application. This usually takes 1-2 days! As soon as your application is accepted, you\'ll receive an email with your next steps towards completing your POS Order.';
        }

        if (StageName === 'Underwriting' && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn) {
            description = "Your SkyTab POS Order Application has been Approved!";
        }

        if (StageName === 'Order Administration' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn && blurb.Name === 'Merchant Confirmation Form') {
            description = (<>The Order is currently waiting on your input to continue. Please follow <a href='/abc'>this link</a> to confirm critical details about your Order.</>);
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
            description = `Our team is scheduling your POS Installation with a preferred technician for ${new Date().toLocaleDateString()}.`;
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
                    <div style={{width: '30px', zIndex: '+5', background: (index === Blurb.length-1 && props.stageIndex === 3) ? '#ffffff' : ''}}>
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
                                        <FontAwesomeIcon style={{width: '13px', color: '#136EF6'}} icon={faSpinner} spin />
                                    </div>
                                </div>
                            ) : (
                                <div className='circle'/>
                            )}
                    </div>
                    <div className='step-text'>
                        <h4 className='m-0'>{blurb.Name}</h4>
                        {getDescription(blurb) ? <p className='mt-1'>{getDescription(blurb)}</p> : null}
                    </div>
                </div>
            );
        })
    )
}

export default BlurbList;