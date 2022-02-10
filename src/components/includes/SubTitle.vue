<template>
  <div class="subtitle text-center">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  props: ['title']
}
</script>

<style scoped>
/*.section-title {*/
/*  text-align: center;*/
/*  padding-bottom: 30px;*/
/*}*/

/*.section-title h2 {*/
/*  font-size: 32px;*/
/*  font-weight: 700;*/
/*  margin-bottom: 20px;*/
/*  padding-bottom: 20px;*/
/*  position: relative;*/
/*}*/

/*.section-title h2::after {*/
/*  content: '';*/
/*  position: absolute;*/
/*  display: block;*/
/*  width: 50px;*/
/*  height: 3px;*/
/*  background: #ff7f5d;*/
/*  bottom: 0;*/
/*  left: calc(50% - 25px);*/
/*}*/
</style>