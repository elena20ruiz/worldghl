import { createStore } from 'vuex'
import game from './game'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    game
  },
  strict: debug
})
