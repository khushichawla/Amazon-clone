/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51PxCJO2LnwDXmcERivmZbY1gwTot9MEmKCJ5Un75K4mHhO8hBLHiJncEpHQ4H2nOAXM7HkE0AJ4xKOOtds4YcVUy00gfYp1mYf')

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment request received for this amount: ', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, // in subunits of the currency
        currency: "usd",
    });
    
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)

// example end point
// http://127.0.0.1:5001/challenge-a4533/us-central1/api