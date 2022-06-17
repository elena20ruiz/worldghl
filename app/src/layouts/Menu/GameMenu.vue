<template>
  <div class="wg-game-menu">
    <div class="wg-text__subtitle wg-text__subtitle--large wg-game-menu__title">
        {{ page.title[step] }}
    </div>
    <div class="wg-game-menu__options">
      <template v-if="step === 0">
        <div v-for="(item, index) of page.categories" :key="index">
          <wg-square-button
            color="tertiary"
            :icon="item.icon"
            :text="item.text"
            :id="item.id"
            @click="onNextStep"
          />
        </div>
      </template>
      <template v-else-if="step === 1">
        <div class="wg-game-menu__configuration">
          <wg-card class="wg-game-menu-card">
            <span class="wg-text__label wg-text__label--medium wg-text__label--primary">
              <i :class="selectedCategory.icon" />
              {{ selectedCategory.text }}
            </span>
            <div class="wg-row">
              <div class="wg-col">
                <div class="wg-row">
                  <span class="wg-text__body wg-text__body--primary">Questions:</span>
                </div>
                <div class="wg-row wg-game-menu__button-group">
                  <wg-button-toggle
                    v-model="input.questions"
                    :options="[
                      { label: 'All', value: 'all' },
                      { label: 'Countries', value: 'COUNTRIES' },
                      { label: 'Capitals', value: 'CAPITALS' },
                    ]"
                  />
                </div>
              </div>
            </div>
            <div class="wg-row">
              <div class="wg-col">
                <div class="wg-row wg-game-menu-card__separared-input">
                  <span class="wg-text__body wg-text__body--primary">Show the time:</span>
                  <div>
                    <wg-button-toggle
                      v-model="input.time"
                      :options="[
                        { label: 'Yes', value: 1 },
                        { label: 'No', value: 0 },
                      ]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <wg-button class="wg-game-menu__play" @click="onStartGame">PLAY</wg-button>
          </wg-card>
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
          type: '',
          questions: 'all',
          time: 1
        },
        page: {
          title: ['Select a category', 'Configure the name'],
          categories: [{
            text: 'POPULATION',
            id: 'POPULATION_CON',
            icon: 'fas fa-users'
          }, {
            text: 'SIZE',
            id: 'SIZE',
            icon: 'fas fa-ruler'
          }]
        }
      }
    },
    computed: {
      selectedCategory () {
        if (this.step === 1) {
          const { type } = this.input
          return this.page.categories.find((el) => el.id === type)
        }
        return {}
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
    gap: 40px;

    &__title {
      font-weight: 700;
    }

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

    &__play {
      margin-top: 20px;
      width: 60%;
    }
  }
</style>
