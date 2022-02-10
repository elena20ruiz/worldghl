<template>
    <va-button-toggle
        v-model="model"
        :options="options"
        :rounded="false"
        :class="['wg-button-toggle', `wg-button-toggle--${color}`]"
        @input="onClick"
      />
</template>
<script>
export default {
  name: 'wgButtonToggle',
  props: {
    value: {
      default: '',
      type: String
    },
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
  },
  methods: {
    onClick () {
      this.$emit('input', this.model)
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
      &:hover {
        opacity: 0.9;
      }
    }

    &--primary {
      .va-button {
        &--active {
          color: $wg-primary-container-color !important;
          background: $wg-on-primary-container-color !important;
        }

      }
    }

    &--secondary {
      .va-button {
        &--active {
          color: $wg-secondary-container-color !important;
          background: $wg-on-secondary-container-color !important;
        }
      }
    }

    &--tertiary {
      .va-button {
        &--active {
          color: $wg-tertiary-container-color !important;
          background: $wg-on-tertiary-container-color !important;
        }
      }
    }
  }
</style>