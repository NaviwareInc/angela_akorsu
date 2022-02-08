<template>
  <Home />
</template>

<script>
import Home from "./pages/Home";
export default {
  name: 'App',
  components: {Home},
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*section {*/
/*  padding: 4%;*/
/*}*/
</style>
