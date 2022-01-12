import population from '../data/population.json'
import { createUnsortedArray } from '../utils/random.js'
const state = {
  current: {
    topic: '',
    score: 0,
    level: 0,
    data: {}
  },
  scores: {
    record: 10
  },
  dataset: {
    all: [],
    order: []
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
  startCurrentGame (state, { topic }) {
    if (!topic) topic = 'POPULATION'
    state.dataset.all = population.places
    const SIZE = population.places.length
    state.dataset.order = createUnsortedArray(SIZE)
    const [ lastIndex, currentIndex, nextIndex ] = [
      state.dataset.order[0],
      state.dataset.order[1],
      state.dataset.order[2]
    ]
    state.current = {
      topic,
      score: 0,
      level: 0,
      data: {
        last: state.dataset.all[lastIndex],
        current: state.dataset.all[currentIndex],
        next: state.dataset.all[nextIndex],
        description: 'of population.'
      }
    }
    console.log({ current: state.current.data })
  },
  validateAnswer (state) {
    console.log({ level: state.current.level })
    // Increase results
    state.current.score += 1
    state.current.level += 1

    // Prepare next question
    state.current.data.last = state.current.data.current
    state.current.data.current = state.current.data.next

    const nextQuestion = state.dataset.order[state.current.level + 2]
    state.current.data.next = state.dataset.all[nextQuestion]
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
    commit('startCurrentGame', { topic })
  },
  verifyAnswer ({ commit, state }, { userAnswer }) {
    const { last: lastData, current: currentData } = state.current.data
    const [valueL, valueR] = [parseInt(lastData.value), parseInt(currentData.value)]
    const expectedAnswer = valueL < valueR
    if (valueL !== valueR && expectedAnswer !== Boolean(userAnswer)) {
      console.log('is invalid')
      commit('updateUserScores')
      return { valid: false }
    } else {
      console.log('is valid')
      commit('validateAnswer')
      return { value: true }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
