<template>
  <div class="highlight">
    <div class="details">
      <h4>New Work Orders</h4>
      <p class="count">{{ newCounter }}</p>
      <p><i class="fas fa-caret-up"/>5% From last Week</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newCounter() {
      return this.$store.state.newCounter;
    }
  }
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
