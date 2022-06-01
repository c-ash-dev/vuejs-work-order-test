<template>
  <div class="highlight">
    <div class="details">
      <h4>Work Orders In Progress</h4>
      <p class="count">{{ progressCounter }}</p>
      <p><i class="fas fa-caret-down"/>7% From last Week</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'progressCounter',
    ]),
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    }
  },
}
</script>

<style lang="scss">

.highlight {
  display: flex;
  flex-basis: calc(100% / 2);
  padding: 5px;
  justify-content: center;
}

.details {
  padding: 10px 5px 10px 5px;
}

.count {
  font-size: 1.8em;
  padding: 8px 0 8px 0;
}

@media (min-width: 600px) {
  .highlight {
    flex-basis: calc(100% / 4);
    border-left: 3px solid #ADB2B5;
  }


  .noborder {
    border-left: none;
  }
}
</style>
