<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="../assets/apple.jpg" alt="Sunset in the mountains">
      <div class="px-7 font-bold text-xl pb-5">{{name}}</div>
      <span class="mx-6 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{price}}</span>

      <div class="px-6 pb-2">
    
      <button v-on:click="buy" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Buy me</button>
    </div>
  </div>
</template>

<script>

const stripe = window.Stripe("pk_test_51JChB4D7cnqRCO55PI4GPuisnGRDbO5uEUFerXCc7fInPRvGmDoQ2fV4dgflNVvLdhW2DuTBhfbpIcEBJrnpCW8000fLzWzAVA")

export default {
  name: 'Card',
  props: ['name', 'price'],
  methods: {
    buy() {
      console.log('You bought ' + this.name)
      const serverURL = "http://localhost:3000/create-checkout-session"
      fetch(serverURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          quantity: 1 // I'm just passing a quantity of 1 for now, this is basically random just getting to do something with lambda. 
        })
      }).then((response) => response.json())
      .then((session) => {
          stripe.redirectToCheckout({sessionId: session.id}) // ID should be string id of the session 
        })
    }
  }
}
</script>