<template>
  <div class="highlights">
    <app-new class="noborder bottom"></app-new>
    <app-progress class="left bottom"></app-progress>
    <app-time></app-time>
    <app-cost class="left"></app-cost>
  </div>
</template>

<script>
import New from './Highlight_New'
import Progress from './Highlight_Progress'
import Time from './Highlight_Time'
import Cost from './Highlight_Cost'

export default {
  components: {
    appNew: New,
    appProgress: Progress,
    appTime: Time,
    appCost: Cost,
  }
}

</script>

<style lang="scss">

.highlights {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding-top: 60px;
}

.left {
  border-left: 1px solid #ADB2B5;
}

.bottom {
  border-bottom: 1px solid #ADB2B5;
}

@media (min-width: 600px) {
  .highlights {
    padding-top: 75px;
    padding-left: 50px;
  }

  .bottom {
    border-bottom: none;
  }

}
</style>
