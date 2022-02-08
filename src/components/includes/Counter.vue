<template>
  <div class="col-lg-3 col-6 text-center">
    <span data-toggle="counter-up">{{ figure }}</span>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ['figure', 'title']
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