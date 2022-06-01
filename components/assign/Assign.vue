<template>
  <div class="assign">
    <app-new-work-orders></app-new-work-orders>
  </div>
</template>

<script>

import NewWorkOrders from './NewWorkOrders'

export default {
  components: {
    appNewWorkOrders: NewWorkOrders,
  }
}

</script>

<style lang="scss">

.assign {
  display: flex;
}
</style>
