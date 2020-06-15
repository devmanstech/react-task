import React from 'react';
import {useHistory} from 'react-router-dom';
import jsPDF from 'jspdf'
import html2canvas from "html2canvas";
function Final(props) {
    const history = useHistory();
    const handleDownloadPdf = () => {
        const filename  = 'ThisIsYourPDFFilename.pdf';

        html2canvas(document.querySelector('#content')).then(canvas => {
            // let pdf = new jsPDF('p', 'mm', 'a4');
            let pdf = new jsPDF('p', 'mm', [297, 297]);
            pdf.addImage(canvas.toDataURL('text'),'JPEG',0,0,canvas.width*0.2,canvas.height*0.2,"a","FAST");
            pdf.save(filename);
        });
    }
    return (
        <>
            <div className="container-fluid">
                <br/>
                <ul className="list-unstyled multi-steps">
                    <li onClick={() => history.push('/')}/>
                    <li onClick={() => history.push('/billingInfo')}/>
                    <li className="is-active"></li>
                </ul>
            </div>
            <div className="container">
                <div className="success-message">
                    <h1 className="title">It's on its way !</h1>
                    <p><span>[Name]</span> just got some NOSH credits to spend on their next meal plan thanks to you</p>
                    <a href="" onClick={event => {
                        event.preventDefault();
                        handleDownloadPdf()
                    }
                    }>Download PDF Template</a>
                    <div/>
                    <div className="screen-msg" id={"content"}>
                        <h2>Gift Details</h2>
                        <p className="recipient">Send to: <span>{props.finalData.customerName}</span></p>
                        <p className="message">Message: <span className="msg">{props.finalData.message}</span></p>
                        <p className="amount">Amount: <span>${props.finalData.giftTotal}</span></p>
                        <br/>
                        <p className="gift-code">Gift Code: <span className="msg">{"Gift123564"}</span></p>
                    </div>
                    <p className="note">In the mood to show more love ? Give another NOSH gift that keeps on giving</p>
                    <button className="button gift" onClick={event => {
                        event.preventDefault();
                        props.onHandleSubmitData()
                    }}><a href="">Gift More</a></button>
                </div>
            </div>
        </>
    );
}

export default Final;
