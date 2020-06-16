import * as React from 'react';
import {useHistory } from 'react-router-dom'
function Home(props) {
    const history = useHistory();
    const [email, setEmail] = React.useState(props.data.email);
    const [customerName, setCustomerName] = React.useState(props.data.customerName);
    const [giftTotal, setGiftTotal] = React.useState(props.data.giftTotal);
    const [message, setMessage] = React.useState(props.data.message);
    const handleNavigateBillingInfo = (event) => {
        event.preventDefault();
        if (email=='' || giftTotal==''|| customerName=='' || message=='')
            {
                alert("Please Insert All Fields!");
                return
            }
        props.onHandleSaveData({email,customerName,giftTotal,message});
        history.push("/parent/billingInfo")
    }
    return (
        <>
            <div className="container-fluid">
                <br/>
                <ul className="list-unstyled multi-steps">
                    <li className="is-active"/>
                    <li/>
                    <li/>
                </ul>
            </div>
            <div className="container">
                <h1 className="title">Gift Details</h1>
                <p className="sub-title">Simply fill in the form below! no NOSH account required.</p>
                <div className="gift-form">
                    <form  id="gift-details" >
                        <h4 className="title">NOSH MEAL PLAN</h4>
                        <h3 className="sub-title">GIFT CARD</h3>
                        <div className="recipient">
                            <label>TO</label>
                            <input type="text" value={customerName}
                                   name="to" id="to"
                                   placeholder="NAME OF RECIPIENT"
                                   onChange={(event => setCustomerName(event.target.value))}
                            />
                        </div>
                        <div className="price">
                            <label>$</label>
                            <select name="price" id="price" placeholder="CHOOSE GIFT AMOUNT" form="gift-details"
                                    size={1}
                                    value={giftTotal}
                                    onChange={event => setGiftTotal(event.target.value)}
                            >
                                <option value="">-Select Amount-</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                                <option value="3000">3000</option>
                            </select>
                        </div>
                        <div className="email">
                            <label>EMAIL</label>
                            <input type="email" value={email}
                                   name="email"
                                   id="email"
                                   placeholder="EMAIL ADDRESS"
                                   onChange={(event)=>setEmail(event.target.value)}
                            />
                        </div>
                        <div className="message">
                            <label>GIFT MESSAGE (250 CHARACTERS)</label>
                            <br/>
                            <textarea name="message"
                                      id="message"
                                      value={message}
                                      onChange={event => setMessage(event.target.value)}
                            />
                        </div>
                        <button
                            type={"submit"}
                            className="button"
                            onClick={event=>handleNavigateBillingInfo(event)}
                        >Biling Info
                        </button>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
