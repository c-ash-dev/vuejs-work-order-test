import workorders from '../../data/workorders';

const state = {
  workorders: []
};

const mutations = {
  'SET_WORKORDERS' (state, workorders) {
    state.workorders = workorders;
  }
};

const actions = {
  initWorkorders: ({commit}) => {
    commit('SET_WORKORDERS', workorders);
  }
};

const getters = {
  workorders: state => {
    return state.workorders;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
