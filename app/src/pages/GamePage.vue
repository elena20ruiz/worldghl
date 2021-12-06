<template>
  <div id="game-page" class="wg-container wg-game-page">
    <div class="wg-row">
      <div class="wg-col wg-col--50 wg-background--primary wg-game-page__data">
        <last-data />
      </div>
      <div class="wg-col wg-col--50 wg-game-page__data">
        <current-data />
      </div>
    </div>
    <div>
      <score text="Record" :value="score" />
      <score text="Score" :value="recordScore"/>
    </div>
  </div>
</template>
<script>
  import LastData from '../layouts/Game/LastData.vue'
  import CurrentData from '../layouts/Game/CurrentData.vue'
  import Score from '../layouts/Game/Score.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'MainPage',
    components: { LastData, CurrentData, Score },
    computed: {
      ...mapState({
        recordScore: ({ game }) => game.scores.record
      })
    },
    data () {
      return {
        score: 0,
        startTime: ''
      }
    },
    watch: {
      $route (to, from){
          // Show modal if are you sure to exit.
          // If it is not possible then reset.
      }
    },
    beforeMount () {
      const type = this.$route.params.game
      this.$store.dispatch('game/initGame', type)
      // Start game - load: last, current and next data
      // Init values
      // Show just last and current.
    },  
    methods: {
      onClick () {
        // 1. If it is correct -> nextStep (dispath)
        // 2. If it is incorrect:
        // -  endGame (dispath)
        // - redirect page
      }
    }
  }
</script>
<style lang="scss" scoped>
  #game-page {
    height: 100vh;
  }

  .wg-game-page {
    &__data {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
