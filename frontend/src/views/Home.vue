<template>
  <main class="mx-5">
    <h1 class="text-6xl font-normal leading-normal mt-0 my-5 text-blue-700">Stripe checkout demo app</h1>
    <Card :name="products[0].name" :price="products[0].price"/> 
  </main>
</template>

<script>
import Card from '../components/Card.vue'
export default { 
  components: {
    Card
  }, 
  data() {
    return {
      products: [
        {
          name: 'Apple',
          price: '$1.00'
        },
        {
          name: 'Banana',
          price: '$2.00'
        },
        {
          name: 'Orange',
          price: '$3.00'
        }
      ]
    }
  }
}

</script>


