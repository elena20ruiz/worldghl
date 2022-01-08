
const state = {
  current: {
    topic: '',
    score: 0,
    data: {}
  },
  scores: {
    record: 10
  }
}

const getters = {
  getData: state => (type) => {
    console.log({ state, state: state.current.data.last.background, type })
    const { description } = state.current.data
    return {
      ...state.current.data[type],
      description
    }
  }
}

const mutations = {
  startCurrentGame (state, { topic, data }) {
    if (!topic) topic = 'POPULATION'
    state.current = {
      topic,
      score: 0,
      data
    }
    console.log({ c: state.current })
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
  async initGame ({ commit }, topic) {
    console.log('starting game:', topic)

    const data = {
      last: {
        title: 'Iceland',
        value: '366425',
        background: {
          url: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        }
      },
      current: {
        title: 'Thailand',
        value: '70221093',
        background: {
          url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        }
      },
      next: {
        title: 'Spain',
        value: '46559370',
        background: {}
      },
      description: 'of population'
    }
    console.log({ data })
    commit('startCurrentGame', { topic, data })
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
