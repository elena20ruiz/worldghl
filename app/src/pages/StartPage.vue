<template>
  <div id="start-page">
    <template v-if="step === 1">
      <main-menu @click:next="onClickNext" />
    </template>
    <template v-if="step === 2">
      <category-menu @click:next="onClickNext" />
    </template>
    <template v-if="step === 3">
      <configuration-menu @click:next="onClickNext" />
    </template>
  </div>
</template>
<script>
  import MainMenu from '../layouts/Menu/MainMenu.vue'
  import CategoryMenu from '../layouts/Menu/CategoryMenu.vue'
  import ConfigurationMenu from '../layouts/Menu/ConfigurationMenu.vue'
  export default {
    name: 'StartPage',
    components: { MainMenu, CategoryMenu, ConfigurationMenu },
    data () {
      return {
        step: 1,
        config: {
          category: '',
          data: {}
        }
      }
    },
    methods: {
      onClickNext (data) {
        if (data) {
          switch (this.step) {
            case 2:
              this.config.category = data
              break
            case 3:
              this.config.data = data
              break
          }
        }
        if (this.step === 3) {
          this.$router.push({ name: 'GamePage', params: { game: this.config.category } })
        }
        this.step += 1
      }
    }
  }
</script>
<style lang="scss" scoped>
  #start-page {
    height: 100vh;
  }
</style>