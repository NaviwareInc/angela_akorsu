<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Dr. Angela Dziedzom Akorsu</h1>
      <h2>Head of Department, Department of Labour and Human Resource Studies, UCC</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped>
.hero:before {
  content: "";
  background: rgba(21, 5, 23, 0.5) linear-gradient(rgba(26, 0, 33, 0.5) 0%, rgba(26, 0, 33, 0.5) 5%, rgba(38, 6, 51, 0.5) 40%, rgba(147, 47, 69, 0.7) 76%, rgba(236, 97, 93, 0.7) 94%, rgba(236, 97, 93, 0.5) 100%) repeat scroll 0% 0%;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

.hero {
  width: 100%;
  height: 100vh;
  background: url(../../assets/hero-bg.jpg) top center;
  background-size: cover;
  position: relative;
  margin-bottom: -75px;
  /*background-attachment: fixed;*/
}

.hero-content {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero h1 {
  margin: 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 56px;
  text-transform: uppercase;
  color: #fff;
}

.hero h2 {
  color: #eee;
  margin: 15px 0 0 0;
  font-size: 24px;
}

</style>