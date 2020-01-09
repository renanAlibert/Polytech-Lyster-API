import Vue from "vue";
import Vuex from "vuex";

import dps from "./modules/dps";

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      dps,
    }
});