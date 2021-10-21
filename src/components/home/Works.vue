<template>
  <div class="works">
    <div class="container">
      <h2 class="works__title">Works</h2>
      <masonry-wall class="cards" :items="works" :gap="30" :column-width="300">
        <template #default="{ item }">
          <ui-card :data="item" @card-click="onCardClick" />
        </template>
      </masonry-wall>
    </div>
    <div class="works__ornament works__ornament--top" />
    <div class="works__ornament works__ornament--bottom" />
  </div>
</template>

<script>
import Card from './Card.vue';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
// import ScrollReveal from 'scrollreveal';

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

    // const initScrollReveal = async () => {
    //   await ScrollReveal().reveal('.works__title', {
    //     delay: 100,
    //     distance: '30px',
    //   });
    //   await ScrollReveal().reveal('.cards', {
    //     delay: 200,
    //     distance: '30px',
    //   });
    // };

    onMounted(async () => {
      // to-do: fix scrollReveal
      // initScrollReveal();
    });

    return { works, onCardClick };
  },
};
</script>

<style lang="scss" scoped>
.works {
  position: relative;
  display: flex;
  justify-content: center;
  background: $color-overlay;
  color: $color-base;

  &__title {
    margin-bottom: 50px;
    padding-top: 20px;
    background: $color-overlay;
    font-size: 60px;
  }

  &__ornament {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1000px;
    background-size: contain;
    pointer-events: none;
    z-index: z-index(main);

    &--top {
      background: url('@/assets/img/figures/wave-gradient-top.svg') no-repeat
        bottom;
      bottom: 100%;
    }

    &--bottom {
      background: url('@/assets/img/figures/wave-gradient-bottom.svg') no-repeat
        top;
      top: 100%;
    }
  }
}
</style>
