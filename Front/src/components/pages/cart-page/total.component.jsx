import React from 'react';
import { withRouter } from 'react-router-dom';

function loadScript(src) {
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true)
        }

        script.onerror = () =>{
            resolve(false);
        }

        document.body.appendChild(script)

    })
    
}

const Total = ({ itemCount, total, clearCart, history }) => {

    async function displayRazorpay() {

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert('Razorpay SDK failed')
            return
        }

        const requestOption = { 
            method: 'POST', 
            body: JSON.stringify({ amount: total }),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const data = await fetch('http://localhost:1337/razorpay', requestOption).then((t) => t.json())

        
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            currency: data.currency,
            amount: data.amount.toString(), 
            name: "VOID",
            description: "Pay Amount",
            image: "http://localhost:1337/logo.png",
            order_id: data.id, 
            handler: function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill: {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            
        };
        var paymentOject = new window.Razorpay(options);
        paymentOject.open();
    }



    return (
        <div className='total-container'>
            <div className="total">
                <p>Total Items: {itemCount}</p>
                <p>{`Total: ₹ ${total}`}</p>
            </div>
            <div className='checkout'>
                <button className="button is-black" onClick={displayRazorpay}>CHECKOUT</button>
                <button className="button is-white" onClick={() => clearCart()}>CLEAR</button>
            </div>
        </div>
    )
}

export default withRouter(Total);

