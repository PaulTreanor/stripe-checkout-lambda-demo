"use strict";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// function that calculates random number between 5000 and 100000
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100000) + 5000;
};

module.exports = {

  createCheckoutSession: async (event, context) => {
    // jsonify event
    const body = JSON.parse(event.body);
    console.log("event body", body.quantity); 
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      // success_url: 'http://localhost:4242/success?id={CHECKOUT_SESSION_ID}',
      success_url: 'http://localhost:5173/success',

      cancel_url: 'http://localhost:5173/cancel', 
      mode: 'payment', 
      line_items: [
        {
          // price: 'price_1LTis2D7cnqRCO55ifhiZ5OQ',
          description: 'home heating oil',
          price_data: {
            currency: 'eur',
            unit_amount: getRandomNumber (),
            product_data: {
              name: 'Oil',
            },
          },
          quantity: 1
        }
      ]
    });
    return {
      statusCode: 200,
      body: JSON.stringify({  id: session.id })
    }
  }
}

