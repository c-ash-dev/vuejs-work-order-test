<template>
  <div class="departmentstats">
    <app-stats></app-stats>
  </div>
</template>

<script>

import Stats from './Stats'

export default {
  components: {
    appStats: Stats,
  }
}

</script>

<style lang="scss">

.departmentstats {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1250px) {
  .departmentstats {
    flex-direction: row;
  }
}
</style>
