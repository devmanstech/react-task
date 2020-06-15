import React from 'react';
import {useHistory} from 'react-router-dom'

function BillingInfo(props) {
    const history = useHistory();
    const [yourName, setYourName] = React.useState(props.data.yourName);
    const [yourEmail, setYourEmail] = React.useState(props.data.yourEmail);
    const [cardNumber, setCardNumber] = React.useState(props.data.cardNumber);
    const [cardCVC, setCardCVC] = React.useState(props.data.cardCVC);
    const [cardExpireDate, setCardExpireDate] = React.useState(props.data.cardExpireDate);

    const handleSaveDataAndNavigateFinalPage = (event) => {
        event.preventDefault();
        if (yourName == '' || yourEmail == '' || cardNumber == '' || cardCVC == '' || cardExpireDate == '') {
            alert("Please Insert All Fields!");
            return
        }
        props.onHandleSaveData({yourName, yourEmail, cardNumber, cardCVC, cardExpireDate});
        history.push("/final")
    }

    return (
        <>
            <div className="container-fluid">
                <br/>
                <ul className="list-unstyled multi-steps">
                    <li onClick={() => history.push('/')}/>
                    <li className="is-active"/>
                    <li onClick={() => history.push('/final')}/>
                </ul>
            </div>
            <div className="container">
                <h1 className="title">Billing Info</h1>
                <div className="screen-msg">
                    <p className="total">Gift Total:
                        <span>HK${props.detailData.giftTotal}
                            <a href={""} onClick={event => {
                                event.preventDefault();
                                history.push("/")
                            }}>Edit</a>
                        </span>
                    </p>
                    <p className="email">Email: <span>{props.detailData.email}</span></p>
                    <p className="message">Message: <span>{props.detailData.message}</span></p>
                </div>
                <div className="billing-info">
                    <form action="index_submit" method="post" id="billing-form" accept-charset="utf-8">
                        <h3>Your information</h3>
                        <div className="section-1">
                            <div className="name">
                                <label>Your name</label>
                                <br/>
                                <input type="text"
                                       value={yourName}
                                       onChange={event => setYourName(event.target.value)}
                                       name="to"
                                       id="to"/>
                            </div>
                            {/*name*/}
                            <div className="email">
                                <label>You Email Address</label>
                                <br/>
                                <input type="email"
                                       value={yourEmail}
                                       onChange={event => setYourEmail(event.target.value)}
                                       name="email" id="email"/>
                            </div>
                            {/*    Email*/}
                        </div>
                        {/*Section 1*/}
                        <h3>Payment</h3>
                        <div className="section-2">
                            <div className="card-number">
                                <div className="card-n">
                                    <label>Card Number</label>
                                    <input type="text" value={cardNumber}
                                           onChange={event => setCardNumber(event.target.value)}
                                           name="to" id="to"/>
                                </div>
                                {/*Card Number*/}
                                <div className="cvc-n">
                                    <label>CVC</label>
                                    <input type="text" value={cardCVC}
                                           onChange={event => setCardCVC(event.target.value)}
                                           name="to" id="to"/>
                                </div>
                                {/*CVC Number*/}
                            </div>
                            <div className="expire-date">
                                <label>Expire Date</label>
                                <input type="text" value={cardExpireDate}
                                       onChange={event => setCardExpireDate(event.target.value)}
                                       name="to" id="to"/>
                            </div>
                            {/*expire-date*/}
                        </div>
                        {/*Section 2*/}
                    </form>
                    <p className="footer-msg">Credits can be used for meal plan purchases only. Credit expiration date
                        is 12
                        months from purchase. By purchasing, you agreed to the <a href="#" target="_blank">Gift
                            Terms</a></p>
                </div>
                <button
                    className="button"
                    type="submit"
                    form="billing-form"
                    onClick={event => handleSaveDataAndNavigateFinalPage(event)}
                >Final
                </button>
            </div>
            {/*container*/}
        </>

    );
}

export default BillingInfo;
