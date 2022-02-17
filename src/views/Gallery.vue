<template>
  <Header loc="away"/>

  <main>
    <section class="gallery">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
        <p class="text-center">This is my gallery</p>

        <div>
          <lightgallery :settings="{ speed: 500, plugins: plugins }" class="row">
            <a :key="image"
               v-for="image in gallery"
               class="gallery-item col-lg-4 col-md-12 mb-4"
               :data-src="image.src"
               :data-sub-html="image.description"
               data-aos="fade-up"
               data-aos-duration="1500"
               data-aos-delay="200">
              <img :alt="image.alt" :src="image.src" class="img-fluid rounded"/>
            </a>
          </lightgallery>
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
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

//aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Gallery",
  components: {Panel, Footer, PageHeader, Header, Lightgallery},
  data() {
    return {
      heading: "Gallery",
      plugins: [lgZoom, lgAutoplay, lgFullscreen, lgThumbnail],
      gallery: [
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 1</h4>',
          alt: 'Pic 1'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 2</h4>',
          alt: 'Pic 2'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 3</h4>',
          alt: 'Pic 3'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 4</h4>',
          alt: 'Pic 4'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 5</h4>',
          alt: 'Pic 5'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 6</h4>',
          alt: 'Pic 6'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 7</h4>',
          alt: 'Pic 7'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 8</h4>',
          alt: 'Pic 8'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 9</h4>',
          alt: 'Pic 9'
        },
        {
          src: 'dr_akorsu.jpg',
          description: '<h4 class="mb-5">This is a pic from Ghana - 10</h4>',
          alt: 'Pic 10'
        }
      ]
    }
  },
  mounted() {
    AOS.init({ once: true })
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery-bundle.css');

.gallery-item img {
  transform-origin: center center;
  transition: transform 0.15s, filter 0.15s ease;
  width: 100%;
}

.gallery-item img:hover {
  cursor: pointer;
  /*transform-origin: center center;*/
  transition: transform 0.15s, filter 0.15s ease;
  filter: brightness(80%);
}

.lg-outer .lg-thumb-item.active, .lg-outer .lg-thumb-item:hover {
  border-color: #ff7f5d;
}
</style>