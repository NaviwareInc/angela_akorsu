<template>
  <Header/>

  <main>
    <section class="gallery">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
        <p class="text-center">This is my gallery</p>

        <div class="">
          <lightgallery
              :settings="{ speed: 500, plugins: plugins }" class="row"
          >
            <a :key="image"
               v-for="image in gallery"
               class="gallery-item col-lg-4 col-md-12 mb-4"
               :data-src="image.src"
               :data-sub-html="image.description">
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
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

export default {
  name: "Gallery",
  components: {Panel, Footer, PageHeader, Header, Lightgallery},
  data() {
    return {
      heading: "Gallery",
      plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen],
      gallery: [
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 1',
          alt: 'Pic 1'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 2',
          alt: 'Pic 2'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 3',
          alt: 'Pic 3'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 4',
          alt: 'Pic 4'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 5',
          alt: 'Pic 5'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 6',
          alt: 'Pic 6'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 7',
          alt: 'Pic 7'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 8',
          alt: 'Pic 8'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 9',
          alt: 'Pic 9'
        },
        {
          src: 'dr_akorsu.jpg',
          description: 'This is a pic from Ghana - 10',
          alt: 'Pic 10'
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');

.gallery {

}
</style>