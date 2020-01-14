const state = {
    gold: 0,
};

const getters = {
    getGold: (state) => state.gold,
};

const actions = {
    //canPurchase: (state,canPurchase)
};

const mutations = {
    addGold: (state, addedGold) => (state.gold += addedGold),
    subGold: (state, subGold) => (state.gold -= subGold),
};

export default {
    state,
    getters,
    actions,
    mutations,
}