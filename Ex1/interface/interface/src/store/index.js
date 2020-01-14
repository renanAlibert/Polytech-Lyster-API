import Vue from "vue";
import Vuex from "vuex";

import dps from "./modules/dps";
import life from "./modules/life";
import punch from "./modules/punch";
import gold from "./modules/gold";

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      dps,
      life,
      punch,
      gold,
    }
});
