import React from 'react';
import {useHistory} from 'react-router-dom';
function Final(props) {
    const history = useHistory()
    return (
        <>
            <div className="container-fluid">
                <br/>
                <ul className="list-unstyled multi-steps">
                    <li onClick={()=>history.push('/')}/>
                    <li onClick={()=>history.push('/billingInfo')}/>
                    <li className="is-active"></li>
                </ul>
            </div>
            <div className="container">
                <div className="success-message">
                    <h1 className="title">It's on its way !</h1>
                    <p><span>[Name]</span> just got some NOSH credits to spend on their next meal plan thanks to you</p>
                    <a href="#" target="_blank">Download PDF Template</a>
                    <div/>
                    <div className="screen-msg">
                        <h2>Gift Details</h2>
                        <p className="recipient">Send to: <span>MIKO@MIKO.com</span></p>
                        <p className="message">Message: <span className="msg">Enjoy a NOSH gift from me!</span></p>
                        <p className="amount">Amount: <span>$500</span></p>
                        <br></br>
                        <p className="gift-code">Gift Code: <span className="msg">FDSFSF</span></p>
                    </div>
                    <p className="note">In the mood to show more love ? Give another NOSH gift that keeps on giving</p>
                    <button className="button gift"><a href="index.html" target="_blank">Gift More</a></button>
                </div>
            </div>
        </>
    );
}

export default Final;
