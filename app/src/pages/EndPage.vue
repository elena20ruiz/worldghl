<template>
  <div id="end-page" class="wg-end-page wg-container">
    <div class="wg-row">
      <div class="wg-col wg-col--50 wg-end-page__left">
        <div class="wg-row">
          <img v-if="description==='BAD'" src="../assets/img/BAD.gif" />
          <img v-else-if="description==='GOOD'" src="../assets/img/GOOD.gif" />
          <img v-else src="../assets/img/RECORD.gif" />
        </div>
        <div class="wg-row wg-end-page__action-buttons">
          <wg-button @click="onHome">HOME</wg-button>
          <wg-button @click="onRetry">RETRY</wg-button>
        </div>
      </div>
      <div class="wg-col wg-col--50 wg-end-page__right">
        <div class="wg-row">
          <span class="wg-end-page__title">Your score</span>
        </div>
        <div class="wg-row">
          <label v-if="totalDate.minutes || totalDate.seconds" class="wg-end-page__text">
            in <label class="wg-end-page__text--tertiary"> {{ totalDate.minutes ? `${totalDate.minutes} minutes and` : '' }}  {{ totalDate.seconds }} seconds</label>:
          </label>
        </div>
        <div class="wg-row">
          <label class="wg-end-page__score">{{ score }} </label>
        </div>
        <div class="wg-row">
          <label class="wg-end-page__text">
            <template v-if="description === 'BAD'">
              very <label class="wg-end-page__text--secondary">far</label> from your record of {{ recordScore }} points.
            </template>
            <template v-else-if="description === 'GOOD'">
              <label class="wg-end-page__text--tertiary">close</label> from your record of {{ recordScore }} points.
            </template>
            <template v-else-if="description === 'RECORD'">
              <label>Congratulations! New personal record.</label>
            </template>
          </label>
        </div>
      </div>
    </div>
    <div class="wg-row wg-end-page__bottom">
      <wg-social-button social="twitter" @click="onHome">
        Tweet it
      </wg-social-button>
      <wg-social-button social="share" @click="onHome">
        Share it
      </wg-social-button>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  import wgButton from '../components/partials/buttons/wgButton.vue'
  import wgSocialButton from '../components/partials/buttons/wgSocialButton.vue'
  export default {
  components: { wgButton, wgSocialButton },
    name: 'EndPage',
    computed: {
      ...mapState({
        score: ({ game }) => game.current.score,
        initialDate: ({ game }) => game.current.initialDate,
        topic: ({ game }) => game.current.topic
      }),
      ...mapGetters({
        recordScore: 'game/getRecordScore'
      }),
      totalDate () {
        if (!this.initialDate) return { minutes: 0, seconds: 0}
        const miliseconds = Math.abs(new Date() - this.initialDate)
        const minutes = Math.floor(miliseconds / 60000)
        const seconds = ((miliseconds % 60000) / 1000).toFixed(0)
        return { minutes, seconds }
      },
      description () {
        if (this.score > this.recordScore) return 'RECORD'
        else if (this.recordScore - this.score <= 5) return 'GOOD'
        else return 'BAD'
      }
    },
    methods: {
      onRetry () {
        this.finishGame()
        this.resetGame()
        this.$router.push({ name: 'GamePage' })
      },
      onHome () {
        this.finishGame()
        this.$router.push({ name: 'StartPage' })
      },
      finishGame () {
        this.$store.dispatch('game/finishGame')
      },
      resetGame () {
        const topic = this.topic
        this.$store.dispatch('game/initGame', { topic })
      }
    }
  }
</script>
<style lang="scss">
  #end-page {
    height: 100vh;
    width: 100%;
    background-color: $wg-surface;
  }

  .wg-end-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    &__left {
      display: flex;
      align-items: space-between;
      justify-content: center;
      img {
        width: 80%;
        margin: 0 auto;
      }
    }

    &__bottom {
      height: 2em;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 2em;
      span {
        color: white;
      }
    }

    &__action-buttons {
      margin-top: 3em;
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    &__title {
      font-weight: 700;
      font-size: 60px;
      color: white;
    }

    &__score {
      font-weight: 700;
      font-size: 230px;
      color: $wg-primary-color;
    }

    &__text {
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      font-size: 30px;
      color: white;
      &--secondary {
        color: $wg-secondary-color;
      }
      &--tertiary {
        color: $wg-tertiary-color;
      }
    }
  }
</style>