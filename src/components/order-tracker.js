import React, {useEffect, useMemo, useState} from "react";
import BlurbList from "./blurb";
import axios from "axios";

const OrderTracker = () => {

    const [steps, setSteps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

    const lineHeight = {
        'Underwriting': '80%',
        'Order Administration': '80%',
        'Onsite Services': '73%',
        'Deployment': '60%'
    };

    return(
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
                            {steps.map((step, index) => {
                                return(
                                    <div className='mt-3 mb-4' key={index}>
                                        <h3 className='mt-2 mb-4'>Stage {index+1}: {step.StageName}</h3>
                                        <div className='steps'>
                                            <div className='line' style={{height: lineHeight[step.StageName]}} />
                                            <BlurbList StageName={step.StageName} Blurb={step.Blurb} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            }
            <button className='btn theme-btn mt-4'>Back to Home</button>
        </div>
    )
}

export default OrderTracker;