<template>
  <div id="main" class="maincontent">
    <app-header></app-header>
    <app-highlights></app-highlights>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header'
import Highlights from './Highlights'

export default {
  components: {
    appHeader: Header,
    appHighlights: Highlights,
  }
}

</script>

<style lang="scss">

body {
  background-color: rgba(174, 174, 175, 0.3);
}
#main {
  position: relative;
  margin-left: 0;
  z-index: 1;
}

@media (min-width: 1150px){
  #main {
    padding: 0 20px 0 20px;
    transition: margin-left 0.5s;
    margin-left: 0;
  }

}
</style>
