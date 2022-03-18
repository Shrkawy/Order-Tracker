import React from 'react';

import './App.css';

//Bootstrap for responsiveness
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="main_container">
        <h1>Tesla Order Tracker</h1>

        <div class="container padding-bottom-3x mb-1">
          <div class="card mb-3">
            <div class="p-4 text-center text-white text-lg bg-dark rounded-top">
              <span class="text-uppercase">Tracking Order No - </span>
              <span class="text-medium">001698653lp</span>
            </div>
            <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
              <div class="w-100 text-center py-1 px-2">
                <span class="text-medium">Shipped Via:</span> UPS Ground
              </div>
              <div class="w-100 text-center py-1 px-2">
                <span class="text-medium">Status:</span> Checking Quality
              </div>
              <div class="w-100 text-center py-1 px-2">
                <span class="text-medium">Expected Date:</span> APR 27, 2022
              </div>
            </div>
            <div class="card-body">
              <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-cart"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Order</h4>
                </div>
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-config"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Prepare for Delivery</h4>
                </div>
                <div class="step completed">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-medal"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Appointment</h4>
                </div>
                <div class="step">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-car"></i>
                    </div>
                  </div>
                  <h4 class="step-title">VIN</h4>
                </div>
                <div class="step">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-wallet"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Payment</h4>
                </div>
                <div class="step">
                  <div class="step-icon-wrap">
                    <div class="step-icon">
                      <i class="pe-7s-home"></i>
                    </div>
                  </div>
                  <h4 class="step-title">Delivery</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
            <div class="custom-control custom-checkbox mr-3">
              <input
                class="custom-control-input"
                type="checkbox"
                id="notify_me"
                checked=""
              />
              <label class="custom-control-label" for="notify_me">
                Notify me when order is delivered
              </label>
            </div>
            <div class="text-left text-sm-right">
              <a class="btn btn-outline-primary btn-rounded btn-sm" href="#">
                View Order Details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
