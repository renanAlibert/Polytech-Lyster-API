const state = {
    punch: 1,
};

const getters = {
    getPunch: (state) => state.punch,
};

const actions = {};

const mutations = {
    addPunch: (state, addedPunch) => (
        state.punch += addedPunch
    ),
    setPunch: (state, npunch) => (
        state.punch = npunch < 0 ? 0 : npunch
    ),
};

export default {
    state,
    getters,
    actions,
    mutations,
}