<template>
  <div class="section-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
    <h2>{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ['heading']
}
</script>

<style scoped>
.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::after {
  content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #ff7f5d;
  bottom: 0;
  left: calc(50% - 25px);
}
</style>