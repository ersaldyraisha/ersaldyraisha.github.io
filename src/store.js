import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      works: [],
      selectedWorkId: null,
      lastScroll: 0,
    };
  },
  mutations: {
    setWorks(state, payload) {
      state.works = payload;
    },
    setSelectedWorkId(state, payload) {
      state.selectedWorkId = payload;
    },
    setLastScroll(state, payload) {
      state.lastScroll = payload;
    },
  },
  getters: {
    selectedWork({ selectedWorkId, works }) {
      return works.find((item) => item.id === selectedWorkId);
    },
  },
  actions: {
    async fetchWorks({ commit }) {
      const response = await axios.get('data.json');
      commit('setWorks', response.data);
    },
  },
});
