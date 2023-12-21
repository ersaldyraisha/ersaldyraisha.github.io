<template>
  <div class="works">
    <div class="container">
      <h3 class="works__title">Works</h3>
      <ul class="works__grid">
        <ui-card v-for="work in works" :data="work" @card-click="onCardClick" />
      </ul>
    </div>
    <div class="works__ornament works__ornament--top" />
    <div class="works__ornament works__ornament--bottom" />
  </div>
</template>

<script>
import Card from './Card.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  components: {
    'ui-card': Card,
  },
  setup() {
    const store = useStore();
    const works = computed(() => store.state.works);

    const onCardClick = (selected) => {
      store.commit('setSelectedWorkId', selected.id);
      store.commit(
        'setLastScroll',
        document.querySelector('.homepage').scrollTop
      );
    };

    return { works, onCardClick };
  },
};
</script>

<style lang="scss" scoped>
@keyframes slide-up {
  from {
    bottom: calc(100% - 150px);
  }

  to {
    bottom: 100%;
  }
}

.works {
  position: relative;
  display: flex;
  justify-content: center;
  background: $color-overlay;
  color: $color-base;

  &__title {
    position: relative;
    z-index: z-index(content);
    margin-bottom: 50px;
    padding-top: 20px;
    background: $color-overlay;
    font-size: 60px;

    @media screen and (max-width: 960px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  &__grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__ornament {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1000px;
    background-size: contain;
    pointer-events: none;
    z-index: z-index(ornament);

    @media screen and (max-width: 960px) {
      display: none;
    }

    &--top {
      background: url('@/assets/img/figures/wave-top-gradient.svg') no-repeat
        bottom;
      bottom: 100%;
      animation: slide-up 2s both;

      @media screen and (max-width: 960px) {
        animation: none;
      }
    }

    &--bottom {
      background: url('@/assets/img/figures/wave-bottom-gradient.svg') no-repeat
        top;
      top: 100%;
    }

    @media screen and (max-width: 960px) {
      height: 500px;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 20px 0 60px;
  }
}
</style>
