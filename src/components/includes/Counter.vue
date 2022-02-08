<template>
  <div class="col-lg-3 col-6 text-center">
    <vue3-autocounter :startAmount="0" :endAmount="figure"/>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter';

export default {
  name: "Counter",
  props: ['figure', 'title'],
  components: {
    'vue3-autocounter': Vue3autocounter
  }
}
</script>

<style scoped>
.counts .counters span {
  font-size: 48px;
  display: block;
  color: #ff7f5d;
}

.counts .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
}
</style>