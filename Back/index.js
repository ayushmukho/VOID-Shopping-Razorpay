const app = require('express')();
const express = require('express');
const path = require('path');
const shortid = require('shortid');
const cors = require('cors');
const Razorpay = require('razorpay');

app.use(cors())

app.use(express.json())

const razorpay = new Razorpay({
    key_id: 'rzp_test_IoXzfJhGQHcAsn',
    key_secret: 'YRL2jHQx94hkVeAWd9aunv2J',
})

app.get('/logo.png', (req,res) => {
    res.sendFile(path.join(__dirname, 'logo.png'))
})

app.post('/razorpay', async (req, res) => {

    const payment_capture = 1;
    const amount = req.body.amount;
    const currency = 'INR'

    const options = { 
        amount: amount * 100, 
        currency, 
        receipt: shortid.generate(), 
        payment_capture 
    }

    try {
        const response = await razorpay.orders.create(options);
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error);
    }

})

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
    console.log('Listening on 1337')
})