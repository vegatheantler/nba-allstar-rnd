const state = {
    players: []
};

const mutations = {
    'RND_PLAYERS' (state) {
        state.players.forEach(player => {
            player.order = Math.floor(Math.random() * (99 - 20 + 1) + 20);
        });
        state.players.sort((a, b) => (a.order > b.order) ? 1 : -1);
    },
    'SET_PLAYERS' (state, players) {
        state.players = players;
    },
    'SET_INITIAL_RATINGS' (state) {
        state.players.forEach(player => {
            player.rating = Math.floor(Math.random() * (99 - 20 + 1) + 20);
        });
    }
};

const actions = {
    randomizePlayers: ({commit}) => {
        commit('RND_PLAYERS');
    }
};

const getters = {
    players: state => {
        return state.players;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};