<template>
  <div class="wg-game-data">
    <span class="wg-game-data__title">
      {{ lastData.title }}
    </span>
    <span class="wg-game-data__subtitle">
      has
    </span>
    <span class="wg-game-data__value">
      {{ lastData.value }}
    </span>
    <span class="wg-game-data__description">
      {{ lastData.description }}
    </span>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'LastData',
    computed: {
      ...mapGetters({
        getData: 'game/getData'
      }),
      lastData () {
        return this.getData('current')
      }
    }
  }
</script>