<template>
  <button :class="['wg-btn', `wg-btn--${type}`, `wg-btn--${color}`, ' wg-text__label--medium']" @click="onClick">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'WgButton',
    props: {
      type: {
        type: String,
        default: 'raised'
      },
      color: {
        type: String,
        default: 'primary'
      }
    },
    emits: ['click'],
    methods: {
      onClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
<style lang="scss">
  .wg-btn {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    transition: all .2s ease-in-out;
    line-height: 36px;

    border: none;
    border-radius: 0px;

    cursor: pointer;
    touch-action: manipulation;
    user-select: none;

    &--raised {
      padding: 0 16px;
      box-shadow:  0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      &.wg-btn {
        &--primary {
          color: $wg-on-primary-color;
          background-color: $wg-primary-color;

          &:active,&:hover {
            color: $wg-primary-container-color;
            background-color: $wg-on-primary-container-color;
          }
        }

        &--secondary {
          color: $wg-on-secondary-color;
          background-color: $wg-secondary-color;
          &:active, &:focus,&:hover {
            color: $wg-secondary-container-color;
            background-color: $wg-on-secondary-container-color;
          }
        }

        &--tertiary {
          color: $wg-on-tertiary-color;
          background-color: $wg-tertiary-color;
          &:active, &:focus,&:hover {
            color: $wg-tertiary-container-color;
            background-color: $wg-on-tertiary-container-color;
          }
        }

        &--social-twitter {
          background-color: $wg-social-twitter-background;
          color: white;
          &:active, &:focus,&:hover {
            background-color: $wg-social-twitter-on-background;
          }
        }

        &--social-share {
          background-color: $wg-tertiary-container-color;
          color: $wg-on-tertiary-container-color;
          &:active, &:focus,&:hover {
            background-color: $wg-on-tertiary-color;
          }
        }
      }
    }

    &--outlined {
      background: transparent;
      &.wg-btn {
        &--primary {
          border: 1px solid $wg-on-primary-color;
          color: $wg-primary-container-color;

          &:active,&:hover {
            border: 1px solid $wg-on-primary-container-color;
            color: $wg-primary-container-color;
          }
        }

        &--secondary {
          border: 1px solid $wg-on-secondary-color;
          color: $wg-secondary-container-color;

          &:active,&:hover {
            border: 1px solid $wg-on-secondary-container-color;
            color: $wg-secondary-color;
          }
        }

        &--tertiary {
          border: 1px solid $wg-on-tertiary-color;
          color: $wg-tertiary-container-color;

          &:active,&:hover {
            border: 1px solid $wg-on-tertiary-container-color;
            color: $wg-tertiary-color;
          }
        }
      }
    }
  }
</style>
