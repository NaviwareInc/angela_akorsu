<template>
  <Header/>

  <main>
    <section class="welcome">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>

        <div class="row text-start">
<!--          <div class="col-lg-6">-->
<!--            <img src="../assets/dr_akorsu.jpg">-->
<!--          </div>-->

<!--          <div class="col-lg-6">-->
            <p>
              Isaac Olawale Albert is a Professor of Peace and Conflict Studies at the University of Ibadan (Nigeria).
              He
              is a specialist in conflict analysis, early warning monitoring, peace process planning, monitoring and
              evaluation. He is a conflict management trainer and professional mediator. He established the MA and PhD
              degree programmes of the University of Ibadan in Peace and Conflict Studies (2000) and the MA and Ph.D
              degree programmes of the Ilorin in Peace and Strategic Studies (2009). He was also the UNDP (Accra, Ghana)
              Consultant for the establishment of the MA Peace and Development Studies course of the University of Cape
              Coast, Ghana. He was a co-founder of and a Research Associate to the Centre for Research on Inequality and
              Human Security (CRISE) at the University of Oxford in the United Kingdom in 2003. He teaches “Theories and
              Analysis of Conflict, Peace and Security” on the three MA courses of the run by the Kofi Annan Kofi Annan
              International Peacekeeping Training Centre in Accra, Ghana: (i) Conflict, Peace and Security, (ii) Gender,
              Peace and Security, and (iii) Executive MA in Conflict, Peace and Security.
            </p>

            <p>
              He is a Consultant to the Ghana Accreditation Board (GAB) in African Studies, Defence Studies and
              International Politics. He served at various times as a Consultant to the UNCHS (Habitat), UNEAD, World
              Bank’s Urban Management Programme, USAID, USAID/OTI, DFID, Oxfam, IDASA, WANEP, US-African Command,
              Friedrich Ebert Foundation, National Defence College (Abuja), Command and Staff College (Jaji), Institute
              for Peace and Conflict Resolution (The Presidency, Abuja), and the Institute of Security Studies (Abuja).
            </p>

            <p>
              In 2007, he served as the Country Director of the Nigeria Office of the Institute for Democracy in South
              Africa (IDASA-Nigeria). He was a federal delegate to the 2014 National Conference in Nigeria and a Member
              of
              the Presidential Panel on the Review of Nigeria’s Defence Policy (2014/15). In March 2015, he chaired the
              pre-inauguration sub-committee of the present government in Nigeria on the “North east” (Boko haram)
              crisis.
              He is an Associate Member of the Finnish Folklore Fellows (Helsinki); a member of the International
              Network
              to Promote the Rule of Law; a Fellow and Board Chairman of the Society for Peace Studies and Practice
              (SPSP/Nigeria) and the current Regional Board Chairman of the West African Network for Peacebuilding
              (Accra,
              Ghana).
            </p>

            <p>
              Prof. Albert was the Pioneer Director of the Centre for Peace and Strategic Studies of the University of
              Ilorin in 2009. He was the Director of the Institute of African Studies University of Ibadan from August
              2010 t0 August 2013. He became the Pioneer Director of UI’s Institute for Peace and Strategic Studies in
              September 2015. He had all his three degrees (BA, MA and PhD) from the University of Ibadan but trained in
              peace processes at the United Nations International Leadership Academy in Amman (1999).
            </p>
<!--          </div>-->
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

export default {
  name: "Profile",
  components: {Panel, Footer, PageHeader, Header},
  data() {
    return {
      heading: "Profile"
    }
  }
}
</script>

<style scoped>
</style>