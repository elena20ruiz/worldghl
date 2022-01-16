<template>
  <div class="wg-btn-group">
    <wg-button
      class="wg-btn-group__button wg-btn-group__button--higher"
      color="tertiary"
      @click="() => $emit('click', 0)"
    >
      <i class="fas fa-thumbs-up"/>
      <span>HIGHER</span>
    </wg-button>
    <wg-button
      class="wg-btn-group__button wg-btn-group__button--lower" 
      color="secondary"
      @click="() => $emit('click', 1)"
    >
      <i class="fas fa-thumbs-down"/>
      <span>LOWER</span>
    </wg-button>
  </div>
</template>
<script>
  import wgButton from '../../components/partials/buttons/wgButton.vue'
  export default {
    components: { wgButton },
    name: 'LHButtons'
  }
</script>
<style lang="scss">
  .wg-btn-group {
    border-radius: 12px;
    cursor: pointer;
    button {
      border-radius: 0px;
    }
    button:not(:last-child) {
      border-right: none !important; /* Prevent double borders */
    }

    &:after {
      content: "";
      clear: both;
      display: table;
    }

    &__button {
      i {
        margin-right: 10px;
      }
    }
  }
</style>