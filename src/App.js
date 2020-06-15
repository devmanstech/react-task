import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import BillingInfo from "./components/BillingInfo";
import Final from "./components/Final";

function App() {
    const giftDetails = {
        email:'',
        customerName:'',
        giftTotal:'',
        message:'',
    };
    const billingInfo = {
        yourName:'',
        yourEmail:'',
        cardNumber:'',
        cardCVC:'',
        cardExpireDate:''
    };
    const handleSaveGiftDetails = (data) =>{
        giftDetails.email = data.email;
        giftDetails.customerName = data.customerName;
        giftDetails.giftTotal = data.giftTotal;
        giftDetails.message = data.message;
    }
    const handleSaveBillingInfo = (data) =>{
        billingInfo.yourName = data.yourName;
        billingInfo.yourEmail = data.yourEmail;
        billingInfo.cardNumber = data.cardNumber;
        billingInfo.cardCVC = data.cardCVC;
        billingInfo.cardExpireDate = data.cardExpireDate;
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home data = {giftDetails} onHandleSaveData = {handleSaveGiftDetails} />
                </Route>
                <Route exact path="/billingInfo">
                    <BillingInfo detailData = {giftDetails} data = {billingInfo} onHandleSaveData={handleSaveBillingInfo}/>
                </Route>
                <Route exact path="/final">
                    <Final/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
