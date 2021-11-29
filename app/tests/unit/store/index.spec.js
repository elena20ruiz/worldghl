import store from '../../../src/store/game'
const { mutations } = store

describe('store', () => {
  const defaultState = {
    current: {
      topic: '',
      score: 0
    },
    scores: {}
  }
  describe('mutations', () => {
    describe('startCurrentGame', () => {
      it('should startCurrentGame with a topic', () => {
        const state = { ...defaultState }
        mutations.startCurrentGame(state, 'POPULATION')
        expect(state.current).toMatchObject({
          topic: 'POPULATION',
          score: 0
        })
      })

      it('should set DEFAULT topic if the topic is empty', () => {
        const state = { ...defaultState }
        mutations.startCurrentGame(state, '')
        expect(state.current).toMatchObject({
          topic: 'POPULATION',
          score: 0
        })
      })
    })

    describe('addCurrentScore', () => {
      it('should increate the score of the current game', () => {
        const state = { ...defaultState}
        state.current.score = 10
        mutations.addCurrentScore(state)
        expect(state.current.score).toEqual(11)
      })
      
    })

    describe('updateUserScores', () => {
      it('should update the user score because is greater', () => {
        const state = { ...defaultState}
        state.current.score = 10
        mutations.updateUserScores(state)
        expect(state.current.score).toEqual(11)
      })

      it('should not update the user score because is lower', () => {
        const state = { ...defaultState}
        state.current.score = 10
        mutations.updateUserScores(state)
        expect(state.current.score).toEqual(11)
      })

      it('should update the user score because is empty', () => {
        const state = { ...defaultState}
        state.current.score = 10
        mutations.updateUserScores(state)
        expect(state.current.score).toEqual(11)
      })
    })
  })

  describe('actions', () => {
    
  })
})