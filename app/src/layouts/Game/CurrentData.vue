<template>
  <div class="wg-game-data">
    <div class="wg-game-data__background" :style="{ backgroundImage: `url(${lastData.background.url})`}" />
    <div class="wg-game-data__content">
      <div class="wg-game-data__title">
        <span class="wg-text__title wg-text__title--large">{{ lastData.title }}</span>
      </div>
      <div class="wg-game-data__subtitle">
        <span class="wg-text__body wg-text__body--large">has</span>
      </div>
      <div v-if="!isClicked" class="wg-game-data__buttons">
        <l-h-buttons @click="onClick"/>
      </div>
      <div v-if="isClicked" class="wg-game-data__value">
        <span class="wg-text__digits--large">{{ lastData.value }}</span>
      </div>
      <div class="wg-game-data__description">
        <span class="wg-text__body wg-text__body--large">{{ lastData.description }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import LHButtons from './LHButtons.vue'
  export default {
    components: { LHButtons },
    name: 'CurrentData',
    computed: {
      ...mapGetters({
        getData: 'game/getData'
      }),
      lastData () {
        return this.getData('current')
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
          if (!result.value) {
            this.isCorrect = false
            this.$router.push({ name: 'EndPage' })
          } else {
            this.isCorrect = true
            this.$emit('change')
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