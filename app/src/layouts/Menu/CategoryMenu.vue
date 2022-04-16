<template>
  <div class="wg-category-menu">
    <div class="wg-col wg-category-menu__content">
      <div class="wg-row">
        <div class="wg-text__title wg-text__title--large">
          Select a category:
        </div>
      </div>
      <div class="wg-row">
        <div class="wg-col wg-category-menu__options-list">
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
    background: yellowgreen;
    justify-content: center;
    gap: 40px;
    &__content {
      width: 400px;
      justify-content: center;
      align-items: center;
    }
    &__options-list {
      gap: 10px;
    }
  }
</style>