<template>
  <Header/>

  <main>
    <section class="welcome">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
        <p class="text-center">These are my articles</p>

        <div class="row text-start">

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

export default {
  name: "Articles",
  components: {Panel, Footer, PageHeader, Header},
  data() {
    return {
      heading: "Articles"
    }
  }
}
</script>

<style scoped>
.counts {
  padding: 0;
}
</style>