import React, {useState} from 'react';

import './App.scss';
import Logo from './images/logo.svg';
import Tick from './images/tick.png';

//Bootstrap for responsiveness
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    const [steps] = useState([
        {no: 1, title: 'Order', description: 'Place your Shift 4 order.'},
        {no: 1, title: 'Underwriting', description: 'Your order is being written.'},
        {no: 2, title: 'Order Administrator', description: 'Your order is being administrated.'},
        {no: 3, title: 'Order Services', description: 'You order is under services.'},
        {no: 4, title: 'Deployment', description: 'Your are project is being deployed.'}
    ]);

    const [currentStep] = useState(3);

    return (
        <div className='content'>
            <nav className="navbar navbar-expand-lg navbar-light px-3">
                <a className="navbar-brand" href="#">
                    <img style={{width: '144px'}} src={Logo} alt="logo" className='img-fluid' />
                </a>
            </nav>
            <div className="content ms-5 mt-5">

                <div className="card col-4">
                    <div className='card-header d-flex p-4 justify-content-between align-items-center'>
                        <div>
                            <h2 className='card-title m-0 fw-bold'>Track Order</h2>
                            <p className='m-0'>Here is what to expect before delivery.</p>
                        </div>
                        <p>Order id # 454674</p>
                    </div>
                    <div className='card-body'>
                        <div className='steps'>
                            <div className='line' />

                            {steps.map(step => {
                                return (
                                    <div key={step.no} className={`step d-flex`}>

                                        {step.no < currentStep ? (
                                            <div className='circle circle-filled'>
                                                <div className='icon'>
                                                    <img src={Tick} alt='T' />
                                                </div>
                                            </div>
                                        ): (
                                            <div className='circle' />
                                        )}
                                        <div className='step-text'>
                                            <h4 className='m-0'>{step.title}</h4>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
