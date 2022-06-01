<template>
  <div class="overview">
    <div class="progress">
      <app-monthly-activity></app-monthly-activity>
      <app-preventative-maintenance></app-preventative-maintenance>
    </div>
    <div class="team">
      <app-team></app-team>
      <app-team></app-team>
      <app-team></app-team>
    </div>
  </div>
</template>

<script>

import MonthlyActivity from './MonthlyActivity'
import PreventativeMaintenance from './PreventativeMaintenance'
import Team from './Team'

export default {
  components: {
    appMonthlyActivity: MonthlyActivity,
    appPreventativeMaintenance: PreventativeMaintenance,
    appTeam: Team,
  }
}

</script>

<style lang="scss">

.overview {
  display: flex;
  flex-direction: column;
}

.progress {
  display: flex;
  flex-direction: column;
}

.team {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1250px) {
  .overview {

  }

  .progress {
    flex-direction: row;
  }

  .team {
    flex-direction: row;
    justify-content: space-between;
  }
}

</style>
