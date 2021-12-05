
const state = {
  current: {
    topic: '',
    score: 0
  },
  scores: {
    record: 10
  }
}

const getters = {
  getData: state => (type) => {
    const { description } = state.current.data
    return {
      ...state.current.data[type],
      description
    }
  }
}

const mutations = {
  startCurrentGame (state, topic) {
    if (!topic) topic = 'POPULATION'
    state.current = {
      topic,
      score: 0,
      data: {
        last: {
          title: 'Iceland',
          value: '366425'
        },
        current: {
          title: 'Thailand',
          value: '70221093'
        },
        next: {
          title: 'Spain',
          value: '46559370'
        },
        description: 'of population'
      },
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
    console.log('starting game:', topic)
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
