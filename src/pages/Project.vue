<template>
  <div
    class="project"
    :style="{ '--color-bg': projectDetail?.backgroundColor ?? '#000' }"
  >
    <div v-if="projectDetail" class="project__wrapper">
      <div class="container">
        <router-link to="/" class="back-button">
          <img
            src="@/assets/img/icons/arrow.png"
            alt="back"
            class="back-button__icon"
          />
        </router-link>
        <h1 class="project__title">{{ projectDetail.name }}</h1>
        <p class="project__type">{{ projectDetail.type }}</p>
        <ul class="chips">
          <li class="chips__item">Adobe Ps</li>
          <li class="chips__item">Adobe Xd</li>
          <li class="chips__item">Vue.js</li>
        </ul>
        <div class="grid">
          <div class="grid__item">
            <h4 class="grid__title">Summary</h4>
            <p class="grid__content">
              {{ projectDetail.desc }}
            </p>
          </div>

          <div class="grid__item">
            <h4 class="grid__title">Project Role</h4>
            <p class="grid__content">
              {{ projectDetail.role }}
            </p>
          </div>

          <img
            v-for="(item, index) in projectDetail?.img ?? []"
            :key="`image-${projectDetail.id}-${index}`"
            class="grid__item grid__item--image"
            :src="item"
            :alt="`project-image-${index}`"
          />
        </div>
      </div>
      <div class="project__ornament project__ornament--top" />
      <div class="project__ornament project__ornament--bottom" />
    </div>
    <ui-footer />
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    'ui-footer': Footer,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const projectDetail = computed(() => store.getters.selectedWork);

    const initScrollReveal = async () => {
      const getOption = (delay) => ({
        delay,
        distance: '30px',
      });
      const scrollInstance = ScrollReveal();

      // to-do: fix outline animation not wisible with sr
      await scrollInstance.reveal('.footer__text', { ...getOption(100) });
      await scrollInstance.reveal('.footer__button', { ...getOption(200) });
    };

    onMounted(async () => {
      if (!store.getters.selectedWork) {
        store.commit('setSelectedWorkId', route.query.id);
        await store.dispatch('fetchWorks');
      }

      // to-do: find better solution: wait router transition, then activate scrollReveal
      setTimeout(() => {
        initScrollReveal();
      }, 500);
    });

    return { projectDetail };
  },
};
</script>

<style lang="scss" scoped>
@keyframes reveal {
  from {
    transform-origin: bottom;
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform-origin: bottom;
    transform: translateY(0);
    opacity: 1;
  }
}

.project {
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    height: fit-content;
    background: var(--color-bg);
    color: $color-base;
    padding-bottom: 50px;
  }

  &__title {
    margin-top: 100px;
    margin-bottom: 5px;
    font-size: 70px;
    animation: reveal 0.5s ease;
    animation-delay: 0s;
    animation-fill-mode: both;
  }

  &__type {
    font-size: 25px;
    animation: reveal 0.5s ease;
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }

  &__ornament {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1000px;
    background: var(--color-bg);
    pointer-events: none;
    z-index: z-index(ornament);

    &--top {
      bottom: 99%;
      mask: url('@/assets/img/figures/wave-top.svg') no-repeat bottom;
      -webkit-mask: url('@/assets/img/figures/wave-top.svg') no-repeat bottom;
    }

    &--bottom {
      top: 99%;
      mask: url('@/assets/img/figures/wave-bottom.svg') no-repeat top;
      -webkit-mask: url('@/assets/img/figures/wave-bottom.svg') no-repeat top;
    }
  }
}

.back-button {
  position: absolute;
  left: -130px;
  top: 100px;
  display: block;

  &__icon {
    width: 80px;
    transform: rotate(-90deg);
  }
}

.chips {
  margin: 40px 0;
  animation: reveal 0.5s ease;
  animation-delay: 0.25s;
  animation-fill-mode: both;

  &__item {
    display: inline-block;
    background: $color-base;
    color: var(--color-bg);
    margin-right: 10px;
    padding: 6px 12px;
    border-radius: 100px;
  }
}

.grid {
  columns: 2 auto;
  column-gap: 30px;
  animation: reveal 0.5s ease;
  animation-delay: 0.4s;
  animation-fill-mode: both;

  &__item {
    margin-bottom: 30px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 30px;

    &--image {
      padding: 0;
    }
  }

  &__title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  &__content {
    line-height: 1.5;
    font-weight: 400;
  }
}
</style>
