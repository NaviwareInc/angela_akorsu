<template>
  <Header/>

  <main>
    <section class="recognitions">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>

        <div class="row">
          <Zoomy
              pic="./images/f17.jpg"
              title="Fellow of the Institute of Chartered Mediators & Conciliators (ICMC)"
              date="02/02/2001"
              desc="This is a good award from the Institute of Chartered Mediators & Conciliators (ICMC)"
          />
          <Zoomy
              pic="./images/f17.jpg"
              title="Fellow of the Institute of Chartered Mediators & Conciliators (ICMC)"
              date="02/02/2001"
              desc="This is a good award from the Institute of Chartered Mediators & Conciliators (ICMC)"
          />
          <Zoomy
              pic="./images/f17.jpg"
              title="Kofi Annan International Peacekeeping Training Centre"
              date="02/02/2009"
              desc="This is another good award from the Kofi Annan International Peacekeeping Training Centre"
              shift="mt-lg-5"
          />
          <Zoomy
              pic="./images/f17.jpg"
              title="Kofi Annan International Peacekeeping Training Centre"
              date="02/02/2009"
              desc="This is another good award from the Kofi Annan International Peacekeeping Training Centre"
              shift="mt-lg-5"
          />
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
import Zoomy from "@/components/includes/Zoomy";

//aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Recognitions",
  components: {Panel, Footer, PageHeader, Header, Zoomy},
  data() {
    return {
      heading: "Awards & Recognition"
    }
  },
  mounted() {
    AOS.init({ once: true })
  }
}
</script>

<style>
.recognitions .zoomy .pic {
  width: 35%;
}
</style>