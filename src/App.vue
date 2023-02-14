<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png">
    </header>
    <SearchTable/>
  </div>
</template>

<script>
import SearchTable from './components/SearchTable.vue'

export default {
  name: 'App',
  components: {
    SearchTable
  },
  mounted() {
  }
}
</script>

<style>
@font-face {
  font-family: "Abel";
  src: local("Abel"),
   url(./assets/fonts/Abel-Regular.ttf) format("truetype");
}

body {
  font-family: Abel, Helvetica, Arial, sans-serif;
  margin: 0;
}

button, input { font-family: Abel, Helvetica, Arial, sans-serif; }

#app {
  font-family: Abel, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

header {
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}
</style>
