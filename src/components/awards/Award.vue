<template>
  <div class="col-lg-6" :class="shift">
    <div class="align-items-start d-flex member">
      <div class="pic">
        <img :src="require(pic)" class="img-fluid" :alt="title"/>
      </div>

      <div class="award-info">
        <h4>{{ title }}</h4>
        <span>{{ date }}</span>
        <p>{{ desc }}</p>

<!--        <div class="social">-->
<!--          <a href="">-->
<!--          </a>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Award.vue",
  props: ['pic', 'title', 'date', 'desc', 'shift']
}
</script>

<style>
.award-info {
  padding-left: 30px;
}

.award-info h4{
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #2c4964;
}

.award-info span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}

.award-info p {
  margin: 10px 0 0 0;
  font-size: 14px;
}
</style>