import Vue from 'vue';
import Vuex from 'vuex'

import workorders from './modules/workorders';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {
    workorders
  },

  state: {
    newCounter: 4,
    progressCounter: 6,
    timeCounter: 3.5,
    costCounter: 2785,
    preventativeCounter: 30,
    reactiveCounter: 30,
    value: 0,
  },
  getters: {
    newCounter: state => {
      return state.newCounter;
    },
    progressCounter: state => {
      return state.progressCounter;
    },
    preventativeCounter: state => {
      return state.preventativeCounter;
    },
    reactiveCounter: state => {
      return state.reactiveCounter;
    },
    preventativePercent: state => {
      return (state.preventativeCounter/(state.preventativeCounter + state.reactiveCounter)*100).toFixed(2);
    },
    reactivePercent: state => {
      return (state.reactiveCounter/(state.preventativeCounter + state.reactiveCounter)*100).toFixed(2);
    },
    value: state => {
      return state.value;
    }
  },
  mutations: {
    increaseProgress: (state) => {
      state.progressCounter ++;
    },
    increasePreventative: (state, payload) => {
      state.preventativeCounter += payload;
    },
    increaseReactive: (state, payload) => {
      state.reactiveCounter += payload;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    increaseProgress: ({commit}) => {
      commit('increaseProgress');
    },
    increasePreventative: ({ commit }, payload ) => {
      commit('increasePreventative', payload);
    },
    increaseReactive: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increaseReactive', payload.by);
      }, payload.duration);
    },
    updateValue: ({ commit }, payload) => {
      commit('updateValue', payload);
    }
  }
});
