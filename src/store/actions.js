import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('players.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const players = data;
                commit('SET_PLAYERS', players);
                commit('RND_PLAYERS');
                commit('SET_INITIAL_RATINGS', players);
            }
        });
};