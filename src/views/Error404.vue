<template>
  <Header/>

  <main>
    <section class="container text-center justify-content-center pe-auto m-5">
      <h1 class="fw-bolder">404</h1>
      <h3>This page does not exist</h3>

      <button @click="goBack">Go Back</button>
      <button @click="goHome">Home</button>
    </section>

    <Panel/>
  </main>

  <Footer/>
</template>

<script>
import Header from "@/components/includes/Header";
import Panel from "@/components/includes/Panel";
import Footer from "@/components/includes/Footer";

export default {
  name: "Error404",
  components: [Header, Panel, Footer],
  methods: {
    goBack(){
      this.$router.back()
    },
    goHome(){
      this.$router.push( {name: 'Home'})
    }
  }
}
</script>