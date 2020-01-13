const state = {
    currLvl: 0,
    lvlMax: 0,
};

const getters = {
    getCurrLvl: (state) => state.currLvl,
    getLvlMax: (state) => state.lvlMax,
};

const actions = {};

const mutations = {
    changeLvl: (state, lvlSelected) => (state.currLvl = lvlSelected),
    lvlUp: (state) => (
    					state.currLvl += 1
    					state.lvlMax = state.currLvl 
    				  ),
};

export default {
    state,
    getters,
    actions,
    mutations,
}