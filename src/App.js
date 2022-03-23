import React from 'react';
import './App.scss';
import Navbar from "./ui/navbar";
import OrderTracker from "./components/order-tracker";

//Bootstrap for responsiveness
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    return (
        <div className='content'>
            <Navbar />
            <OrderTracker />
        </div>
    )
}

export default App;
