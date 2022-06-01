<template>
  <div class="pvm">
    <h1>Preventative vs. Reactive Maintenance</h1>
    <h3>Preventative: {{ preventativeCounter }}</h3>
    <h3>Reactive: {{ reactiveCounter }}</h3>
    <h3>Preventative Percent: {{ preventativePercent }}%</h3>
    <h3>Reactive Percent: {{ reactivePercent }}%</h3>
    <button @click="increasePreventative(100)">Preventative</button>
    <button @click="increaseReactive({by: 50, duration: 500})">Reactive</button>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'increasePreventative',
      'increaseReactive'
    ]),
  },
  computed: {
    ...mapGetters([
      'preventativePercent',
      'reactivePercent',
      'preventativeCounter',
      'reactiveCounter'
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
.pvm {
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: center;
  margin: 10px 0;
  padding: 15px;
  background-color: #FFF;
}

@media (min-width: 1250px) {
  .pvm {
    flex-grow: 1;
    margin-top: 40px;
  }
}
</style>
