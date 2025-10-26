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
            alt="Back To Homepage"
            class="back-button__icon"
          />
        </router-link>

        <h1 class="project__title">{{ projectDetail.name }}</h1>
        <p class="project__type">{{ projectDetail.type }}</p>

        <ul class="chips">
          <li
            v-for="item in projectDetail.tech"
            :key="`tech-${projectDetail.id}-${item}`"
            class="chips__item"
          >
            <p>{{ item }}</p>
          </li>
        </ul>

        <div class="grid">
          <a
            v-if="projectDetail.url"
            :href="projectDetail.url"
            target="_blank"
            class="grid__item grid__item--url"
          >
            <div class="grid__head">
              <h2 class="grid__title">Visit Site</h2>
              <img
                src="@/assets/img/icons/arrow.png"
                alt="Visit Site"
                class="grid__icon"
              />
            </div>
            <p class="grid__content">
              {{ projectDetail.url }}
            </p>
          </a>

          <div class="grid__item">
            <h2 class="grid__title">Summary</h2>
            <p class="grid__content">
              {{ projectDetail.desc }}
            </p>
          </div>

          <div class="grid__item">
            <h2 class="grid__title">Project Role</h2>
            <p class="grid__content">
              {{ projectDetail.role }}
            </p>
          </div>

          <a
            v-for="(item, index) in imgUrls"
            :key="`image-${projectDetail.id}-${index}`"
            class="grid__item grid__item--thumbnail"
            :href="item"
            target="_blank"
          >
            <img
              class="grid__image"
              :src="item"
              :alt="`project-image-${index}`"
            />
          </a>
        </div>
      </div>
      <div class="project__ornament project__ornament--top" />
      <div class="project__ornament project__ornament--bottom" />
    </div>
    <ui-footer />
  </div>
</template>

<script>
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

    const imgUrls = computed(() => {
      return projectDetail.value.img.map((image) => {
        if (!image) return '';
        try {
          return new URL(`../assets/img/${image}`, import.meta.url).href;
        } catch (e) {
          return '';
        }
      });
    });

    onMounted(async () => {
      if (!store.getters.selectedWork) {
        store.commit('setSelectedWorkId', route.query.id);
        await store.dispatch('fetchWorks');
      }
    });

    return { projectDetail, imgUrls };
  },
};
</script>

<style lang="scss" scoped>
@keyframes reveal-up {
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

@keyframes reveal-left {
  from {
    transform-origin: right;
    transform: translateX(70px);
    opacity: 0;
  }

  to {
    transform-origin: right;
    transform: translateX(0);
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
    animation: reveal-up 0.5s ease;
    animation-delay: 0.3s;
    animation-fill-mode: both;

    @media screen and (max-width: 960px) {
      font-size: 32px;
    }
  }

  &__type {
    font-size: 25px;
    animation: reveal-up 0.5s ease;
    animation-delay: 0.4s;
    animation-fill-mode: both;

    @media screen and (max-width: 960px) {
      font-size: 18px;
    }
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

      @media screen and (max-width: 960px) {
        display: none;
      }
    }

    &--bottom {
      top: 99%;
      mask: url('@/assets/img/figures/wave-bottom.svg') no-repeat top;
      -webkit-mask: url('@/assets/img/figures/wave-bottom.svg') no-repeat top;

      @media screen and (max-width: 960px) {
        height: 500px;
        display: none;
      }
    }
  }
}

.back-button {
  position: absolute;
  left: -135px;
  top: 100px;
  display: block;
  animation: reveal-left 0.5s ease;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  padding: 10px;

  &__icon {
    width: 80px;
    transform: rotate(-90deg);

    @media screen and (max-width: 960px) {
      width: 46px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 100px;
    transform: scale(0.8);
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: scale(1);
    opacity: 1;
  }

  @media screen and (max-width: 960px) {
    top: 20px;
    left: -10px;
  }
}

.chips {
  margin: 40px 0;
  animation: reveal-up 0.5s ease;
  animation-delay: 0.6s;
  animation-fill-mode: both;

  @media screen and (max-width: 960px) {
    margin: 25px 0 10px 0;
  }

  &__item {
    display: inline-block;
    background: $color-base;
    color: var(--color-bg);
    margin-right: 10px;
    padding: 8px 16px;
    border-radius: 100px;

    @media screen and (max-width: 960px) {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
}

.grid {
  columns: 3 auto;
  column-gap: 20px;
  animation: reveal-up 0.5s ease;
  animation-delay: 0.7s;
  animation-fill-mode: both;
  padding: 10px 0;

  @media screen and (max-width: 960px) {
    columns: 1 auto;
    column-gap: 0;
    margin: 0;
  }

  &__head {
    display: flex;
    justify-content: space-between;
  }

  &__icon {
    width: 32px;
    height: 32px;
    transform: rotate(90deg);
  }

  &__item {
    display: block;
    margin-bottom: 20px;
    padding: 32px;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 30px;
    break-inside: avoid;

    &--thumbnail {
      padding: 0 !important;
      cursor: pointer;
      overflow: hidden;
      height: fit-content;
    }

    &--url {
      position: relative;
      background: rgba(0, 0, 0, 0.4);

      &::after {
        content: '';
        position: absolute;
        top: 10px;
        right: 10px;
        width: 75px;
        height: 75px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 100px;
        transform: scale(0.8);
        opacity: 0;
        transition: all 0.2s ease;

        @media screen and (max-width: 960px) {
          display: none;
        }
      }

      &:hover::after {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media screen and (max-width: 960px) {
      margin-bottom: 16px;
      padding: 20px;
    }
  }

  &__image {
    display: block;
    width: 100%;
  }

  &__title {
    font-size: 30px;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  &__content {
    line-height: 1.5;
    font-weight: 400;

    @media screen and (max-width: 960px) {
      font-size: 14px;
    }
  }
}

.link {
  text-decoration: underline;
}
</style>
