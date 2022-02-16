<template>
  <div class="col-lg-6" :class="shift">
    <h5>
      <a class="intext-link" :href="link">{{ title }}</a>
    </h5>
    <span>{{ authors }}</span><br>
    <span class="fst-italic">{{ source }}</span><br>
    <span>{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: "Articly",
  props: ['link', 'title', 'authors', 'date', 'source', 'shift']
}
</script>

<style>

</style>