import React, {useEffect, useMemo, useState} from 'react';
import './App.scss';
import Logo from './images/logo.svg';
import Tick from './images/tick.png';
import axios from "axios";

//Bootstrap for responsiveness
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    const [steps, setSteps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //get id of the order and pass it to axios to get data
    const orderId = useMemo(() => '1702e75d-a621-11ec-aaa9-0e1d8cb44bd9', []);

    useEffect(() => {
        setError('');
        axios.get(`https://wf-dev.shift4.com/Primary/PostDataToFlow/TaskSystem/OrderTrackerAPI?Status=${orderId}`)
            .then(res => {
                if(res.data){
                    setSteps(res.data);
                }else {
                    setError('Data not found!');
                }
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [orderId]);

    const renderSteps = steps => {
        return steps.map((step, index) => {
            const { StageName } = step;
            const Blurb = JSON.parse(step.Blurb);

            const blurbs = Blurb.map((blurb, index) => {
                if(StageName === 'Underwriting' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn){
                    blurb.description = 'We are working through processing your application. This usually takes 1-2 days! As soon as your application is accepted, you\'ll receive an email with your next steps towards completing your POS Order.';
                }

                if(StageName === 'Underwriting' && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn){
                    blurb.description = "Your SkyTab POS Order Application has been Approved!";
                }

                if(StageName === 'Order Administration' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn && blurb.Name === 'Merchant Confirmation Form'){
                    blurb.description = "The Order is currently waiting on your input to continue. Please follow this link (INSERT LINK HERE) to confirm critical details about your Order.";
                }

                if(StageName === 'Order Administration' && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn && blurb.Name !== 'Merchant Confirmation Form'){
                    blurb.description = "Your Order is being reviewed and your menu is being programmed!";
                }

                if(StageName === 'Order Administration' && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn){
                    blurb.description = "Your menu has been programmed and your order has been reviewed!";
                }

                if(StageName === "Onsite Services" && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn){
                    blurb.description = "Our team is working on fulfilling your order!";
                }

                if(StageName === "Onsite Services" && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn){
                    blurb.description = "Your order has been shipped! Track it using this link (INSERT LINK HERE)";
                }

                if(StageName === "Deployment" && blurb.IsCurrent && !blurb.IsComplete && blurb.StartedOn && !blurb.CompletedOn){
                    blurb.description = "Our team is scheduling your POS Installation with a preferred technician for (INSERT INSTALLATION DATE)";
                }

                if(StageName === "Deployment" && !blurb.IsCurrent && blurb.IsComplete && blurb.StartedOn && blurb.CompletedOn){
                    blurb.description = "Your Skytab POS has been installed!";
                }

                return (
                    <div key={index} className='step d-flex'>
                        <div style={{width: '30px', zIndex: '+5'}}>
                            {blurb.StartedOn ? (
                                <div className='circle circle-filled'>
                                    <div className='icon'>
                                        <img src={Tick} alt='T' />
                                    </div>
                                </div>
                            ) : (
                                <div className='circle' />
                            )}
                        </div>
                        <div className='step-text'>
                            <h4 className='m-0'>{blurb.Name}</h4>
                            {blurb.StartedOn ?
                                <p>
                                    <span className='fw-bold me-1'>Start Time:</span>
                                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(blurb.StartedOn))}
                                </p>
                                : null}
                            {blurb.CompletedOn ?
                                <p>
                                    <span className='fw-bold me-1'>Complete Time:</span>
                                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(blurb.CompletedOn))}
                                </p>
                                : null}
                            <br />
                            {blurb.description ? <p>{blurb.description}</p> : null}
                        </div>
                    </div>
                );
            });

            const lineHeight = {
              'Underwriting': '80%',
              'Order Administration': '80%',
              'Onsite Services': '73%',
              'Deployment': '60%'
            };

            return (
                <div className='mt-3 mb-4' key={index}>
                    <h3 className='mt-2 mb-4'>Stage {index+1}: {StageName}</h3>
                    <div className='steps'>
                        <div className='line' style={{height: lineHeight[StageName]}} />
                        {blurbs}
                    </div>
                </div>
            )
        });
    }

    return (
        <div className='content'>
            <nav className="navbar navbar-expand-lg navbar-light px-3">
                <a className="navbar-brand" href="/">
                    <img style={{width: '144px'}} src={Logo} alt="logo" className='img-fluid'/>
                </a>
            </nav>
            <div className="content mx-5 my-5">
                {loading ? <p>Loading...</p> :
                    error !== '' ? <p>{error}</p> :
                        <div className="card col-xl-4 col-lg-6 col-md-12">
                            <div className='card-header p-4'>
                                <h2 className='card-title m-0 fw-bold'>Track Order</h2>
                                <p className='m-0'>Here is what to expect before delivery.</p>
                                <br />
                                <p className='mb-0'> <span className='fw-bold me-1'>Order Id</span> {orderId} </p>
                            </div>
                            <div className='card-body'>
                                {renderSteps(steps)}
                            </div>
                        </div>
                }
                <button className='btn theme-btn mt-4'>Back to Home</button>
            </div>
        </div>
    )
}

export default App;
