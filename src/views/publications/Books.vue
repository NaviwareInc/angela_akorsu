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
              desc="This is an age old book"
          />

          <Zoomy
              pic = "./images/book.jpg"
              title="In The Chest Of A Woman"
              date="20/09/2020"
              publisher="University of Cape Coast Press"
              desc="This is an age old book"
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

export default {
  name: "Books",
  components: {Zoomy, Panel, Footer, PageHeader, Header},
  data() {
    return {
      heading: "Books"
    }
  }
}
</script>

<style>
.books .zoomy .pic {
  width: 40%;
}
</style>