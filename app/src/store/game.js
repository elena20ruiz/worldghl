import populationCountries from '../data/population.json'
import populationCities from '../data/population-cities-final.json'
import { createUnsortedArray } from '../utils/random.js'

const GAME_MAPPING = {
  'POPULATION_CON': populationCountries,
  'POPULATION_CI': populationCities
}

const state = {
  current: {
    topic: '',
    score: 0,
    record: {},
    level: 0,
    question: 0,
    initialDate: '',
    data: {}
  },
  scores: {},
  dataset: {
    all: [],
    order: []
  }
}

const getters = {
  getData: state => (type) => {
    if (type === 'next' && !state.current.data.next) return undefined;
    const { description } = state.current.data
    return {
      ...state.current.data[type],
      description,
    }
  },
  getRecordScore: state => {
    const { current } = state
    return current.record?.score || 0
  },
  isGameStarted: state => {
    const { topic } = state.current
    return !(topic === '')
  }
}

const mutations = {
  startCurrentGame (state, { topic }) {
    // Get local store.
    if (!Object.keys(state.scores).length) {
      state.scores = JSON.parse(localStorage.getItem('worldghl')) || {}
    }

    // Load dataset.
    if (!topic) topic = 'POPULATION_CON'
    state.dataset.all = GAME_MAPPING[topic].data
    const SIZE = populationCountries.data.length
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
      question: 0,
      initialDate: new Date(),
      record: state.scores[topic],
      data: {
        last: state.dataset.all[lastIndex],
        current: state.dataset.all[currentIndex],
        next: state.dataset.all[nextIndex],
        description: 'of population.'
      }
    }
  },
  validateAnswer (state) {
    // Increase results
    state.current.score += 1
    state.current.level += 1
    state.current.question += 1
  },
  changeToNextQuestion (state) {
    state.current.data.last = state.current.data.current
    state.current.data.current = state.current.data.next

    // Check if it's last question
    let nextQuestion;
    if (state.current.question + 2 >= state.dataset.order.length) {
      // Create new order of questions
      state.dataset.order = createUnsortedArray(populationCountries.data.length)
      state.current.question = 0
      // Problem, after 2nd round question = 1 position is not red.
      nextQuestion = state.dataset.order[state.current.question]
    } else {
      nextQuestion = state.dataset.order[state.current.question + 2]
    }
    state.current.data.next = state.dataset.all[nextQuestion]
  },
  updateUserScores (state) {
    const { topic, score } = state.current
    if (!state.scores[topic] || state.scores[topic].score < score) {
      const now = new Date()
      state.scores[topic] = {
        score,
        date: now
      }
      localStorage.setItem('worldghl', JSON.stringify(state.scores))
    }
  },
  finishGame (state) {
    state.current = {
      topic: '',
      score: 0,
      level: 0,
      initialDate: '',
      data: {}
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
    const expectedAnswer = valueL > valueR
    if (expectedAnswer !== Boolean(userAnswer)) {
      commit('updateUserScores')
      return { valid: false }
    } else {
      commit('validateAnswer')
      return { value: true }
    }
  },
  changeToNextQuestion ({ commit }) {
    commit('changeToNextQuestion')
  },
  finishGame ({ commit }) {
    commit('finishGame')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
