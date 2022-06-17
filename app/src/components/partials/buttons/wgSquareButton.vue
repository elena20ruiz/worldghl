<template>
  <wg-button
    class="wg-elevation__v1 wg-square-button"
    :id="id"
    :color="color"
    @click="() => onClick(id)"
  >
    <i :class="[icon, 'wg-square-button__icon', `wg-square-button__icon--${color}`]"/>
    <span :class="`wg-txt-label wg-txt-label--medium  wg-txt-label--${color} wg-square-button__text`">
      {{ text }}
    </span>
  </wg-button>
</template>
<script>
import wgButton from './wgButton.vue'
  export default {
  components: { wgButton },
    name: 'wgSquareButton',
    props: {
      icon: {
        default: '',
        type: String
      },
      text: {
        default: '',
        type: String
      },
      id: {
        default: '',
        type: String
      },
      color: {
        default: '',
        type: String
      }
    },
    emits: ['click'],
    methods: {
      onClick(id) {
        this.$emit('click', id)
      }
    }
  }
</script>
<style lang="scss">
  .wg-square-button {
    display: inline-block;
    border: none;
    width: 120px;
    height: 120px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: black;
    }

    gap: 10px;
    &__icon {
      font-size: 48px;
      color: $wg-on-primary-color;
      &--tertiary {
        color: white
      }
    }

    &__text {
      font-weight: 600;
      &:hover {
        background-color: black;
      }

    }
  }
</style>