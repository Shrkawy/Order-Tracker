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

    return (
        <div className='content'>
            <nav className="navbar navbar-expand-lg navbar-light px-3">
                <a className="navbar-brand" href="/">
                    <img style={{width: '144px'}} src={Logo} alt="logo" className='img-fluid'/>
                </a>
            </nav>
            <div className="content mx-5 mt-5">
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
                                <div className='steps'>
                                    <div className='line'/>

                                    {steps.map(step => {
                                        return (
                                            <div key={step.Index} className='step d-flex'>
                                                {step.StartTime ? (
                                                    <div className='circle circle-filled'>
                                                        <div className='icon'>
                                                            <img src={Tick} alt='T' />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className='circle' />
                                                )}
                                                <div className='step-text'>
                                                    <h4 className='m-0'>{step.StageName}</h4>
                                                    {step.StartTime ?
                                                        <p>
                                                            <span className='fw-bold me-1'>Start Time:</span>
                                                            {new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(step.StartTime))}
                                                        </p>
                                                        : null}
                                                    {step.CompleteTime ?
                                                        <p>
                                                            <span className='fw-bold me-1'>Complete Time:</span>
                                                            {new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(step.CompleteTime))}
                                                        </p>
                                                        : null}
                                                    {step.PercentComplete ?
                                                        <p>{step.PercentComplete}% complete</p>
                                                        : null}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                }
                <button className='btn theme-btn mt-4'>Back to Home</button>
            </div>
        </div>
    )
}

export default App;
