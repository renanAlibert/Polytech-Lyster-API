const state = {
    currLvl: 0,
    lvlMax: 0,
    lvlBackgrounds = ["./../assets/fantasy_forest.jpg", "./../assets/fantasy_forest2.jpg"],
    lvlMonsters = ["./..assets/mickey.png", "./..assets/martian.png"],
};

const getters = {
    getCurrLvl: (state) => state.currLvl,
    getLvlMax: (state) => state.lvlMax,
    getLvlBackground: (state) => state.lvlBackgrounds[state.currLvl%state.lvlBackgrounds.length],
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