<template>
  <div class="neworders">
    <h1>New Work Orders</h1>
    <app-work-order v-for="workorder in workorders" :key="workorder.id" :workorder="workorder"></app-work-order>
  </div>
</template>

<script>

import WorkOrder from './WorkOrder'

export default {
  components: {
    appWorkOrder: WorkOrder,
  },
  computed: {
    workorders() {
      return this.$store.getters.workorders;
    }
  }
}
</script>

<style lang="scss">
.neworders {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 40px;
  padding: 20px;
  width: 100%;
  height: auto;
  background-color: #FFF;
}

</style>
