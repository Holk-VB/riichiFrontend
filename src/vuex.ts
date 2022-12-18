import vuex from 'vuex'

const state = {
    user: null,
    player:null,
    game:null,
}

const store = new vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user
        },
        player: (state) => {
            return state.player
        },
        game: (state) => {
            return state.game
        },
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        player(context, player) {
            context.commit('player', player)
        },
        game(context, game) {
            context.commit('game', game)
        },
    },
    mutations: {
        user(state, user) {
            state.user = user
        },
        player(state, player) {
            state.player = player
        },
        game(state, game) {
            state.game = game
        },
    },
})

export default store