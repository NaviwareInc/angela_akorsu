<template>
  <Hero/>
  <Header/>

  <main>
    <section class="welcome">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>

        <div class="row text-start">
          <p>
            For a continent like Africa whose modernisation has been such a painful process for the majority of the populace, the continuous re-examination of each and every proposition is at the heart of Afrocentric consciousness.
          </p>

          <p>
            Reduced to whether Africans are the origin of their own disconnect from modernity or some extra-African forces, the Africans share the blame to a greater extent. European imperialism cannot solely be blamed for underdeveloped Africa. Such position suffers from Marxist mono-causality. After all, Asia and Latin America equally experienced Euro-American imperialism but over which many Asian and Latin American countries have transcended. The political rascality, the hereditary democracy and permanent presidency that define the African leadership landscape must be uniquely African problems for which we can't blame outsiders.
          </p>

          <p>Nonetheless, 'African solutions to African problems' is not an innocent phrase but a contextually loaded one.</p>
        </div>
      </div>
    </section>

    <section class="counts light-bg">
      <div class="container py-lg-5">
        <div class="row counters">
          <Counter title="Publications" figure="21"/>

          <Counter title="Speeches" figure="45"/>

          <Counter title="Awards & Recognition" figure="15"/>

          <Counter title="Associations" figure="5"/>
        </div>
      </div>
    </section>

    <Panel />
  </main>

  <Footer />
</template>

<script>
import Hero from "@/components/home/Hero";
import Header from "@/components/includes/Header";
import PageHeader from "@/components/includes/PageHeader";
import Counter from "@/components/home/Counter";
import Footer from "@/components/includes/Footer";
import Panel from "@/components/includes/Panel";

export default {
  name: "Home",
  components: {Panel, Footer, Counter, PageHeader, Header, Hero},
  data() {
    return {
      heading: "Welcome To Dr. Angela Akorsu's Website"
    }
  }
}
</script>

<style scoped>
.counts {
  padding: 0;
}
</style>