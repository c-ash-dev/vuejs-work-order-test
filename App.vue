<template>
  <div id="app">
    <app-side-nav></app-side-nav>
    <app-main-content></app-main-content>
  </div>
</template>

<script>
import SideNav from './components/navigation/SideNav'
import MainContent from './components/maincontent/MainContent'

export default {
  components: {
    appSideNav: SideNav,
    appMainContent: MainContent,
  },
  created() {
    this.$store.dispatch('initWorkorders');
  }
}

</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Roboto,Arial,"Droid Sans",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  //display: flex; causes the main content to collapse left
}

*, :after, :before {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  color: #73879C
}

h1, h2, h3, h4, h5, h6, {
  font-weight: normal;
  padding: 0;
  margin: 0;
  font-size: 1.5em;
}

p {
  padding: 0;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

@media (min-width: 1150px) {
  h2 {
    font-size: 1.8em;
  }
}
</style>
