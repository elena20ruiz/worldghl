<template>
  <div class="wg-category-menu">
    <div class="wg-col content">
      <div class="wg-row">
        <div class="wg-txt-title wg-txt-title--medium">
          Select a category:
        </div>
      </div>
      <div class="wg-row">
        <div class="game-options">
          <wg-button v-for="c of categories" :key="c.value" :id="c.value" @click="(event) => onClick(event)">
            {{ c.name }}
          </wg-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import wgButton from '../../components/partials/buttons/wgButton.vue'
  export default {
    components: { wgButton },
    name: 'CategoryMenu',
    data () {
      return {
        categories: [
          { name: 'Population', value: 'POPULATION_CON' },
          { name: 'Area', value: 'AREA' }
        ]
      }
    },
    emits: ['click:next'],
    methods: {
      onClick (event) {
        this.category = event.target.id || ''
        this.$emit('click:next', this.category)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wg-category-menu {
    display: flex;
    height: 100%;
    justify-content: center;
    .content {
      width: 450px;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .game-options {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      justify-content: center;
    }
  }
</style>