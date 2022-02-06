<template>
  <div id="game-page" class="wg-container">
    <div class="wg-game-page__vs">
      <v-s-text :status="vsStatus" />
    </div>
    <div class="wg-row wg-game-page" id="wg-game-page">
      <last-data class="wg-game-page__data" />
      <current-data class="wg-game-page__data" @change="onChange" />
      <next-data class="wg-game-page__data" />
    </div>
    <div class="wg-game-page__score-container">
      <div class="wg-game-page__score">
        <score text="Record" :value="recordScore" />
        <score text="Score" :value="score"/>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  import LastData from '../layouts/Game/LastData.vue'
  import CurrentData from '../layouts/Game/CurrentData.vue'
  import NextData from '../layouts/Game/NextData.vue'
  import Score from '../layouts/Game/Score.vue'
  import VSText from '../layouts/Game/VSText.vue'
import { delay } from '../utils/delay'
  export default {
    name: 'MainPage',
    components: { LastData, CurrentData, Score, VSText, NextData },
    computed: {
      ...mapState({
        score: ({ game }) => game.current.score
      }),
      ...mapGetters({
        recordScore: 'game/getRecordScore'
      })
    },
    data () {
      return {
        startTime: '',
        vsStatus: ''
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
      async onChange({ isCorrectAnswer }) {
        if (isCorrectAnswer) {
          this.vsStatus = 'CORRECT'
          await delay(1000)
          this.vsStatus = 'INVISIBLE'
          const div = document.getElementById('wg-game-page')
          div.className += " " + 'wg-game-page--processing'
          setTimeout(() => {
            this.vsStatus = ''
            div.className = div.className.replace('wg-game-page--processing', '')
          }, 2000)
        } else {
          this.vsStatus = 'INCORRECT'

          setTimeout(() => {
            this.vsStatus = ''
            this.$router.push({ name: 'EndPage' })
          }, 2000)
        }
      }
    }
  }
</script>
<style lang="scss">
  #game-page {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .wg-game-page {
    width: 150%;
    position: relative;
    &--processing {
      transform: translateX(-50%);
      transition-duration: 2s;
    }
    &__data {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 50%;
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
