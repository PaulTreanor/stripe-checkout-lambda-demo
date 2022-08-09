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

<template>
  <main>
    <h1>Stripe checkout demo app</h1>
    <Card :name="products[0].name" :price="products[0].price"/>
  </main>
</template>
