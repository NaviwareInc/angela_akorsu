<template>
  <Header/>

  <main>
    <section class="books">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
          <p class="text-center">These are my books</p>

        <div class="row">
          <Zoomy
              pic = "./images/book.jpg"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              desc="A play set in the Asante Empire, In the Chest of a Woman is about a woman
              who disguised her daughter as a boy so that she became the empire's king. The play revolves around the girl's
              difficulty in life after she grows."
          />

          <Zoomy
              pic = "./images/book.jpg"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              desc="A play set in the Asante Empire, In the Chest of a Woman is about a woman
              who disguised her daughter as a boy so that she became the empire's king. The play revolves around the girl's
              difficulty in life after she grows."
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
  name: "Books",
  components: {Zoomy, Panel, Footer, PageHeader, Header},
  data() {
    return {
      heading: "Books"
    }
  },
  mounted() {
    AOS.init({ once: true })
  }
}
</script>

<style>
.books .zoomy .pic {
  width: 65%;
}
</style>