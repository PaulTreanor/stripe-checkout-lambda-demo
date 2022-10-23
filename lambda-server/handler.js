"use strict";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
          price: 'price_1LTis2D7cnqRCO55ifhiZ5OQ',
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

