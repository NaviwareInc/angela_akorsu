<template>
  <Header/>

  <main>
    <section class="primer">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>

        <div class="row text-start" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <p>
            He founded and was the Pioneer Director of the Centre for Peace and Strategic Studies, University of Ilorin
            in 2008. He was also the UNDP (Accra, Ghana) Consultant for the establishment of the MA Peace and
            Development Studies course of the University of Cape Coast, Ghana in 2006.
          </p>

          <p>
            Professor Albert’s scholarship revolved around three key issues to which he strictly committed himself. The
            first is to promote the use of historical methods for studying peace and security issues. The second is to
            develop peace and security scholarship in Africa in the context of the continent’s mantra of "African
            solutions to African problems". The third is to produce Afrocentric literature for promoting peace
            scholarship in Africa. He is widely recognized as a security historian.
          </p>

          <p>
            He is a member of several learned and professional associations. These include the International Society for
            Folk Narrative Research (Finland), Ethnic Studies Network (Northern Ireland), Nigeria Field Society, and
            African Association of Political Science. He is a member of the International Network to Promote the Rule of
            Law ; a Fellow and current Board Chairman of the Society for Peace Studies and Practice (SPSP) and a Fellow
            of the Institute of Chartered Mediators and Conciliators (ICMC); the Regional Board Chair of the West
            African Network for Peacebuilding (Accra-Ghana) ) and an Associate Member of the Finnish Folklore Fellows
            (Helsinki). He is a consultant to several international development organisations doing peace related works
            in Africa.
          </p>
        </div>
      </div>
    </section>

    <section class="current-positions light-bg">
      <div class="container py-lg-5">
        <SubTitle title="Current Positions"/>

        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          Regional Board Chair,<br>
          West Africa Network for Peacebuilding (WANEP), Accra, Ghana<br>
          <a href="http://www.wanep.org" class="intext-link">www.wanep.org</a>
        </p>

        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          Head of Department,<br>
          Department of Labour & Human Resource Skills, UCC, Ghana<br>
          <a href="http://dolahrs.ucc.edu.gh" class="intext-link">dolahrs.ucc.edu.gh</a>
        </p>

        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          Regional Board Chair,<br>
          West Africa Network for Peacebuilding (WANEP), Accra, Ghana<br>
          <a href="http://www.wanep.org" class="intext-link">www.wanep.org</a>
        </p>
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
import SubTitle from "@/components/includes/SubTitle";

//aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Associations",
  components: {Panel, Footer, PageHeader, Header, SubTitle},
  data() {
    return {
      heading: "Associations & Memberships"
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