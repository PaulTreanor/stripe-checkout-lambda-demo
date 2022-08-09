<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="../assets/apple.jpg" alt="Sunset in the mountains">
      <div class="px-7 font-bold text-xl pb-5">{{name}}</div>
      <span class="mx-6 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{price}}</span>

      <div class="px-6 pb-2">
    
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Buy me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'price']
}
</script>