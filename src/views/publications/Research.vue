<template>
  <Header/>

  <main>
    <section class="welcome">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>

        <div class="row text-start">
          <p>
            These are my research
          </p>
        </div>
      </div>
    </section>

    <Panel />
  </main>

  <Footer />
</template>

<script>
import Header from "@/components/includes/Header";
import PageHeader from "@/components/includes/PageHeader";
import Footer from "@/components/includes/Footer";
import Panel from "@/components/includes/Panel";

//aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Research",
  components: {Panel, Footer, PageHeader, Header},
  data() {
    return {
      heading: "Research"
    }
  },
  mounted() {
    AOS.init({ once: true })
  }
}
</script>

<style scoped>
</style>