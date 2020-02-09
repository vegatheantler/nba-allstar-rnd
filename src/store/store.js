import Vue from 'vue';
import Vuex from 'vuex';

import players from './modules/players';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        players
    }
});