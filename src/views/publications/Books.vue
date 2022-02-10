Associations.vue<template>
  <Header/>

  <main>
    <section class="welcome">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>

        <div class="row text-start">
          <p>
            These are my books
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

export default {
  name: "Books",
  components: {Panel, Footer, PageHeader, Header},
  data() {
    return {
      heading: "Books"
    }
  }
}
</script>

<style scoped>
.counts {
  padding: 0;
}
</style>