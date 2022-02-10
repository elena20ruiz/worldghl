<template>
    <va-button-toggle
        v-model="model"
        :options="options"
        :rounded="false"
        :class="['wg-button-toggle', `wg-button-toggle--${color}`]"
      />
</template>
<script>
export default {
  name: 'wgButtonToggle',
  props: {
    options: {
      default: () => [],
      type: Array
    },
    color: {
      default: 'tertiary',
      type: String
    }
  },
  data () {
    return {
      model: ''
    }
  },
  mounted () {
    if (this.options.length) {
      this.model = this.options[0].value
    }
  }
}
</script>
<style lang="scss">
  .wg-button-toggle {
    .va-button-group {
      box-shadow:  0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    }

    .va-button {
      color: $wg-surface !important;
      background: $wg-on-surface !important;
    }
    &--secondary {
      .va-button {
        &--active {
          background: $wg-secondary-container-color !important;
          color: $wg-on-secondary-container-color !important;
        }
        &:hover {
          opacity: 0.9;
        }
      }
    }

    &--tertiary {
      .va-button {
        &--active {
          background: $wg-tertiary-container-color !important;
          color: $wg-on-tertiary-container-color !important;
        }
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
</style>