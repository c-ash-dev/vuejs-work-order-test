<template>
  <div class="individual">
    <h1>Engineering Team</h1>
  </div>
</template>

<script>

</script>

<style lang="scss">
.individual {
  display: flex;
  flex-basis: 100%;
  height: 380px;
  justify-content: center;
  margin-top: 40px;
  padding: 15px;
  background-color: #FFF;
}

@media (min-width: 1250px) {
  .individual {
    flex-basis: calc(100%/3.05)
  }
}
</style>
