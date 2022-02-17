<template>
  <Header/>

  <main>
    <section class="welcome">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
        <p class="text-center">These are my articles</p>

        <div class="row text-start">
          <Articlely
              link="https://www.researchgate.net/publication/346207811_Building_Master_Trainers_to_Facilitate_Sexual_Violence_Prevention_A_Pilot_Study_in_Ghana"
              title="Building Master Trainers to Facilitate Sexual Violence Prevention: A Pilot Study in Ghana"
              authors="Caitlin M. Choi, Michelle L Munro-Kramer, Lindsay M. Cannon, Ruth Owusu-Antwi, Angela Akorsu, Sarah Danielson Compton"
              date="January, 2019"
              source="Annals of Global Health"
          />

          <Articlely
              link="https://www.researchgate.net/publication/346207811_Building_Master_Trainers_to_Facilitate_Sexual_Violence_Prevention_A_Pilot_Study_in_Ghana"
              title="Building Master Trainers to Facilitate Sexual Violence Prevention: A Pilot Study in Ghana"
              authors="Caitlin M. Choi, Michelle L Munro-Kramer, Lindsay M. Cannon, Ruth Owusu-Antwi, Angela Akorsu, Sarah Danielson Compton"
              date="January, 2019"
              source="Annals of Global Health"
          />

          <Articlely
              link="https://www.researchgate.net/publication/328356960_Labour_Standards_Regulation_in_a_Globalised_Economy_A_Review_of_Existing_Paradigms"
              title="Labour Standards Regulation in a Globalised Economy: A Review of Existing Paradigms"
              authors="Angela Akorsu"
              date="October, 2018"
              source="Ghana Journal of Development Studies"
              shift="mt-lg-5"
          />

          <Articlely
              link="https://www.researchgate.net/publication/328356960_Labour_Standards_Regulation_in_a_Globalised_Economy_A_Review_of_Existing_Paradigms"
              title="Labour Standards Regulation in a Globalised Economy: A Review of Existing Paradigms"
              authors="Angela Akorsu"
              date="October, 2018"
              source="Ghana Journal of Development Studies"
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
import Articlely from "@/components/includes/Articlely";

//aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Articles",
  components: {Panel, Footer, PageHeader, Header, Articlely},
  data() {
    return {
      heading: "Articles"
    }
  },
  mounted() {
    AOS.init({ once: true })
  }
}
</script>

<style scoped>
.counts {
  padding: 0;
}
</style>