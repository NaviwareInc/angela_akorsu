<template>
  <Header/>

  <main>
    <section class="reports">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
        <p class="text-center">These are my research reports</p>

        <div class="row">
          <Zoomy
              pic="./images/report.png"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              desc="Sexual violence is a widespread human rights violation that affects women and girls throughout the
              world, with particularly high rates among college-age youth."
          />

          <Zoomy
              pic="./images/report.png"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              desc="Sexual violence is a widespread human rights violation that affects women and girls throughout the
              world, with particularly high rates among college-age youth."
          />

          <Zoomy
              pic="./images/report.png"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              shift="mt-lg-5"
              desc="Sexual violence is a widespread human rights violation that affects women and girls throughout the
              world, with particularly high rates among college-age youth."
          />

          <Zoomy
              pic="./images/report.png"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              shift="mt-lg-5"
              desc="Sexual violence is a widespread human rights violation that affects women and girls throughout the
              world, with particularly high rates among college-age youth."
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

//aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Reports",
  components: {Panel, Footer, PageHeader, Header, Zoomy},
  data() {
    return {
      heading: "Research & Reports"
    }
  },
  mounted() {
    AOS.init({ once: true })
  }
}
</script>

<style scoped>
.reports .zoomy .pic {
  width: 65%;
}
</style>