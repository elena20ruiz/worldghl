<template>
  <div class="wg-game-menu">
    <div class="wg-text__title wg-text__title--medium wg-text__title--primary wg-game-menu__title">
        {{ page.title[step] }}
    </div>
    <div class="wg-game-menu__options">
      <template v-if="step === 0">
        <wg-square-button icon="fas fa-users" text="POPULATION" id="POPULATION_CON" @click="onNextStep" />
        <wg-square-button icon="fas fa-ruler" text="SIZE" id="SIZE" @click="onNextStep" />
      </template>
      <template v-else-if="step === 1">
        <div class="wg-game-menu__configuration">
          <wg-card class="wg-game-menu-card">
            <span class="wg-text__label wg-text__label--medium wg-text__label--primary">
              {{ input.type }}
            </span>
            <div class="wg-row">
              <div class="wg-col">
                <div class="wg-row">
                  <span class="wg-text__body wg-text__body--primary">Questions:</span>
                </div>
                <div class="wg-row wg-game-menu__button-group">
                  <wg-button-toggle :options="[
                    { label: 'All', value: 'all' },
                    { label: 'Countries', value: 'COUNTRIES' },
                    { label: 'Capitals', value: 'CAPITALS' },
                  ]" />
                </div>
              </div>
            </div>
            <div class="wg-row">
              <div class="wg-col">
                <div class="wg-row wg-game-menu-card__separared-input">
                  <span class="wg-text__body wg-text__body--primary">Show the time:</span>
                  <div>
                    <wg-button-toggle :options="[
                      { label: 'Yes', value: true },
                      { label: 'No', value: false },
                    ]" />
                  </div>
                </div>
              </div>
            </div>
          </wg-card>
          <wg-button @click="onStartGame">PLAY</wg-button>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import WgButton from '../../components/partials/buttons/wgButton.vue'
import WgButtonToggle from '../../components/partials/buttons/wgButtonToggle.vue'
  import WgSquareButton from '../../components/partials/buttons/wgSquareButton.vue'
  import WgCard from '../../components/partials/cards/wgCard.vue'
  export default {
    name: 'GameMenu',
    components: { WgSquareButton, WgCard, WgButton, WgButtonToggle },
    data () {
      return {
        step: 0,
        input: {
          type: ''
        },
        page: {
          title: ['SELECT A CATEGORY', 'CONFIGURE THE GAME']
        }
      }
    },
    methods: {
      onStartGame () {
        this.$router.push({ name: 'GamePage', params: { game: this.input.type } })
      },
      onNextStep(id) {
        this.input.type = id
        this.step += 1
      }
    }
  }
</script>
<style lang="scss">
  .wg-game-menu {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__options {
      display: flex;
      width: 30em;
      gap: 1em;
      justify-content: center;
    }

    &__button {
      text-align: center;
      display: flex;
      flex-direction: center;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    &__configuration {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .wg-game-menu-card {
      .wg-col {
        gap: 12px;
      }

      &__separared-input {
        justify-content: space-between;
        align-items: center;
      }
    }

    &__button-group {
      justify-content: space-evenly;
    }
  }
</style>
