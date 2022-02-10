<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.light-bg {
  background: #fafafa !important;
}

.intext-link:link, .intext-link:visited {
  color: #ff7f5d;
  text-decoration: none;
}

.intext-link:hover, .intext-link:focus,
.intext-link:active {
  text-decoration: underline;
}

.form-control:focus {
  border: 2px #ff7f5d solid !important;
  outline: none;
}

.gen-link:link, .gen-link:visited {
  color: #495057;
  text-decoration: none;
}

.gen-link:hover, .gen-link:focus {
  color: #ff7f5d;
  text-decoration: underline;
}
</style>
