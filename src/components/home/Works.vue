<template>
  <div class="works">
    <div class="container">
      <h2 class="works__title">Works</h2>
      <ul class="cards">
        <router-link
          v-for="(item, i) in works"
          :key="`card-${i}`"
          :style="{ backgroundColor: item.backgroundColor }"
          to="/project"
          tag="li"
          class="cards__item"
        >
          <img :src="item.image" alt="project" class="cards__image" />
          <div class="cards__text">
            <h4 class="cards__title">{{ item.name }}</h4>
            <p class="cards__description">{{ item.type }}</p>
            <p class="cards__detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              impedit!
            </p>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="works__ornament works__ornament--top" />
    <div class="works__ornament works__ornament--bottom" />
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

export default {
  setup() {
    const ScrollInstance = ScrollReveal();
    const scrollOptions = { distance: '30px' };

    onMounted(() => {
      ScrollInstance.reveal('.works__title', { delay: 100, ...scrollOptions });
      ScrollInstance.reveal('.cards__item', { delay: 300, ...scrollOptions });
    });

    const works = [
      {
        image: 'https://picsum.photos/500/300',
        name: 'Dapoer Bunpat',
        type: 'Website',
        backgroundColor: '#55C2C7',
      },
      {
        image: 'https://picsum.photos/500/450',
        name: 'Koncodapur',
        type: 'Hybrid Application',
        backgroundColor: '#3F3260',
      },
      {
        image: 'https://picsum.photos/500/500',
        name: 'Pegipegi',
        type: 'Mobile Website',
        backgroundColor: '#FA9949',
      },
      {
        image: 'https://picsum.photos/500/400',
        name: 'Schematics',
        type: 'Website',
        backgroundColor: '#324376',
      },
      {
        image: 'https://picsum.photos/500/425',
        name: 'myITS',
        type: 'Mobile Application',
        backgroundColor: '#3F3260',
      },
      {
        image: 'https://picsum.photos/500/600',
        name: 'Amann',
        type: 'Mobile Application',
        backgroundColor: '#55C2C7',
      },
    ];

    return { works };
  },
};
</script>

<style lang="scss" scoped>
$radius: 30px;

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
      background: url('@/assets/img/figures/wave-gradient.svg') no-repeat bottom;
      bottom: 100%;
    }

    &--bottom {
      background: url('@/assets/img/figures/wave-gradient-black.svg') no-repeat
        top;
      top: 100%;
    }
  }
}

.cards {
  column-gap: 30px;
  columns: 3 auto;

  &__item {
    display: inline-block;
    width: 100%;
    background: #55c2c7;
    border-radius: $radius;
    margin-bottom: 30px;
    cursor: pointer;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    min-height: 200px;
    border-radius: $radius;
    transition: all 0.2s ease;
  }

  &__text {
    padding: 30px;
  }

  &__title {
    font-size: 30px;
  }

  &__description {
    font-size: 18px;
    font-weight: 400;
  }

  &__detail {
    display: none;
    margin-top: 20px;
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
