<template>
  <Header/>

  <main>
    <section class="welcome">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
        <p class="text-center">These are my research reports</p>

        <div class="row">
          <Zoomy
              pic="./images/report.png"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              desc="This is an age old book"
          />

          <Zoomy
              pic="./images/report.png"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              desc="This is an age old book"
          />
        </div>
      </div>
    </section>

    <Panel/>
  </main>

  <Footer/>
</template>

<script>
import Header from "@/components/includes/Header";
import PageHeader from "@/components/includes/PageHeader";
import Footer from "@/components/includes/Footer";
import Panel from "@/components/includes/Panel";
import Zoomy from "@/components/includes/Zoomy";

export default {
  name: "Reports",
  components: {Panel, Footer, PageHeader, Header, Zoomy},
  data() {
    return {
      heading: "Research & Reports"
    }
  }
}
</script>

<style scoped>
.counts {
  padding: 0;
}
</style>