const state = {
    life: 100,
    totalLife: 100,
};

const getters = {
    getLife: (state) => state.life,
    getTotalLife: (state) => state.totalLife,
};

const actions = {};

const mutations = {
    setLife: (state, nlife) => (
        state.life = nlife < 0 ? 0 : nlife > state.totalLife ? state.totalLife : nlife
    ),
    setTotalLife: (state, ntotlife) => (
        state.totalLife = ntotlife < 0 ? 0 : ntotlife
    ),
};

export default {
    state,
    getters,
    actions,
    mutations,
}