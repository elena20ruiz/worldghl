
const state = {
  current: {
    topic: '',
    score: 0
  },
  scores: {}
}

const getters = {}

const mutations = {
  startCurrentGame (state, topic) {
    if (!topic) topic = 'POPULATION'
    state.current = {
      topic,
      score: 0
    }
  },
  addCurrentScore (state) {
    state.current.score += 1
  },
  updateUserScores (state) {
    const { topic, score } = state.current
    if (!state.scores[topic] || state.score[topic] < score) {
      const now = new Date()
      state.scores[topic] = {
        score,
        date: now
      }
    }
  }
}

const actions = {
  initGame ({ commit }, topic) {
    commit('startCurrentGame', topic)
  },
  finishGame ({ commit }) {
    commit('updateUserScores')
  },
  addScore ({ commit }) {
    commit('addCurrentScore')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
