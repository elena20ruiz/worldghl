<template>
  <div id="game-page" class="wg-container wg-game-page">
    <div class="wg-row">
      <last-data class="wg-game-page__data" />
      <div class="wg-game-page__vs">
        <v-s-text />
      </div>
      <current-data class="wg-game-page__data" @click="onClick" />
    </div>
    <div class="wg-game-page__score-container">
      <div class="wg-game-page__score">
        <score text="Record" :value="score" />
        <score text="Score" :value="recordScore"/>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import LastData from '../layouts/Game/LastData.vue'
  import CurrentData from '../layouts/Game/CurrentData.vue'
  import Score from '../layouts/Game/Score.vue'
  import VSText from '../layouts/Game/VSText.vue'
  export default {
    name: 'MainPage',
    components: { LastData, CurrentData, Score, VSText },
    computed: {
      ...mapState({
        recordScore: ({ game }) => game.scores.record,
        score: ({ game }) => game.current.score
      })
    },
    data () {
      return {
        startTime: ''
      }
    },
    watch: {
      $route (to, from){
          // Show modal if are you sure to exit.
          // If it is not possible then reset.
      }
    },
    async beforeMount () {
      const type = this.$route.params.game
      this.$store.dispatch('game/initGame', type)
    },  
    methods: {
      async onClick (value) {
        if (typeof value === 'number') {
          const result = await this.$store.dispatch('game/verifyAnswer', { userAnswer: value })
          console.log({ result })
          if (!result.value) {

            this.$router.push({ name: 'EndPage' })
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  #game-page {
    height: 100vh;
  }

  .wg-game-page {

    &__data {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__score-container {
      position: fixed;
      width: 100%;
      bottom: 0;

      justify-content: space-between;
    }

    &__score {
      margin: 2em;
      width: auto;
      display: flex;
      justify-content: space-between;
    }

    &__vs {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 2;
    }
  }
</style>
