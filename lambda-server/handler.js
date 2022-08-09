"use strict";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {

  createCheckoutSession: async (event, context) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: 'http://localhost:4242/success?id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:4242/cancel.html', 
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

