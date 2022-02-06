<template>
  <div class="wg-game-data">
    <div class="wg-game-data__background" :style="{ backgroundImage: `url(${nextData.background.url})`}" />
    <div class="wg-game-data__content">
      <div class="wg-game-data__title">
        <span class="wg-text__title wg-text__title--large">{{ nextData.title }}</span>
      </div>
      <div class="wg-game-data__subtitle">
        <span class="wg-text__body wg-text__body--large">has</span>
      </div>
      <div class="wg-game-data__buttons">
        <l-h-buttons @click="(e) => $emit('click', e)"/>
      </div>
      <div class="wg-game-data__description">
        <span class="wg-text__body wg-text__body--large">{{ nextData.description }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import LHButtons from './LHButtons.vue'
  export default {
    components: { LHButtons },
    name: 'NextData',
    computed: {
      ...mapGetters({
        getData: 'game/getData'
      }),
      nextData () {
        return this.getData('next')
      }
    },
    emits: ['click']
  }
</script>