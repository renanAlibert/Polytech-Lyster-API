const state = {
    dps: 0,
};

const getters = {
    getDps: (state) => state.dps,
};

const actions = {};

const mutations = {
    addDps: (state, addedDps) => (state.dps += addedDps),
};

export default {
    state,
    getters,
    actions,
    mutations,
}