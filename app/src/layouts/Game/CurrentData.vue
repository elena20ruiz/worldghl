<template>
  <div class="wg-game-data">
    <div class="wg-game-data__background" :style="{ backgroundImage: `url(${currentData.background.url})`}" />
    <div class="wg-game-data__content">
      <div class="wg-game-data__title">
        <span class="wg-text__title wg-text__title--large">{{ currentData.title }}</span>
      </div>
      <div class="wg-game-data__subtitle">
        <span class="wg-text__body wg-text__body--large">has</span>
      </div>
      <div v-if="!isClicked" class="wg-game-data__buttons">
        <l-h-buttons @click="onClick"/>
      </div>
      <div v-if="isClicked" class="wg-game-data__value">
        <span class="wg-text__digits--large">{{ currentValue }}</span>
      </div>
      <div class="wg-game-data__description">
        <span class="wg-text__body wg-text__body--large">{{ currentData.description }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import LHButtons from './LHButtons.vue'
  import { delay } from '../../utils/delay.js'
  export default {
    components: { LHButtons },
    name: 'CurrentData',
    computed: {
      ...mapGetters({
        getData: 'game/getData'
      }),
      currentData () {
        return this.getData('current')
      },
      currentValue () {
        const value = parseInt(this.currentData.value)
        return value.toLocaleString()
      }
    },
    data() {
      return {
        isClicked: false,
        isCorrect: undefined
      }
    },
    methods: {
      async onClick (value) {
        if (typeof value === 'number') {
          this.isClicked = true
          const result = await this.$store.dispatch('game/verifyAnswer', { userAnswer: value })
          this.isCorrect = result.value
          this.$emit('change', { isCorrectAnswer: result.value })
          if (result.value) {
            await delay(1000)
            setTimeout(async () => {
              await this.$store.dispatch('game/changeToNextQuestion')
              this.isClicked = false
              this.isCorrect = undefined
            }, 2000)
          }
        }
      }
    }
  }
</script>