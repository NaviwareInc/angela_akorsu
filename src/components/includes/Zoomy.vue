<template>
  <div class="col-lg-6" :class="shift" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
    <div class="zoomy align-items-start d-flex member">
      <div class="pic">
        <img :src="pic" class="img-fluid" :alt="title"/>
      </div>

      <div class="zoomy-info">
        <h4>{{ title }}</h4>
        <span>{{ date }}
<!--          <br v-if="editor">Editor: {{ editor }}-->
<!--          <br v-if="publisher">Publisher: {{ publisher }}-->
        </span>
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zoomy.vue",
  props: ['pic', 'title', 'date', 'desc', 'shift', 'publisher', 'editor']
}
</script>

<style>
.zoomy {
  position: relative;
  box-shadow: 0 2px 15px rgb(44 73 100 / 8%);
  padding: 30px;
  border-radius: 10px;
}

.zoomy .pic {
  overflow: hidden;
  border-radius: 0;
}

.zoomy .pic img{
  transform-origin: center center;
  transition: transform 2s, filter 1.5s ease-in-out;
  filter: brightness(80%);
}

.zoomy:hover .pic img {
  filter: brightness(120%);
  transform: scale(1.5);
}

.zoomy-info {
  padding-left: 30px;
}

.zoomy-info h4{
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #2c4964;
}

.zoomy-info span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}

.zoomy-info span::after {
  content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #ff7f7c;
  bottom: 0;
  left: 0;
}

.zoomy-info p {
  margin: 10px 0 0 0;
  font-size: 15px;
}
</style>