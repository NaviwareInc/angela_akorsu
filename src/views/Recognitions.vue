<template>
  <Header/>

  <main>
    <section class="recognitions">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>

        <div class="row">
          <Award
              pic='@/assets/logo.png'
              title="2001 Best HoD Award"
              date="02/02/2001"
              desc="This is a good award"
          />
          <Award
              title="2002 Best HoD Award"
              date="02/02/2002"
              desc="This is a another good award"
          />
          <Award
              title="2002 Best HoD Award"
              date="02/02/2002"
              desc="This is a another good award"
              shift="mt-4"
          />
          <Award
              title="2002 Best HoD Award"
              date="02/02/2002"
              desc="This is a another good award"
              shift="mt-4"
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
import Award from "@/components/awards/Award";

export default {
  name: "Profile",
  components: {Panel, Footer, PageHeader, Header, Award},
  data() {
    return {
      heading: "Awards & Recognition"
    }
  }
}
</script>

<style scoped>
</style>