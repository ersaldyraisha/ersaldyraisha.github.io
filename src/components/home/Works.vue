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
          <img :src="item.img[0]" alt="project" class="cards__image" />
          <div class="cards__text">
            <h4 class="cards__title">{{ item.name }}</h4>
            <p class="cards__description">{{ item.type }}</p>
            <p class="cards__detail">
              {{ item.desc }}
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
import { onMounted, ref, computed } from 'vue';
import * as fireDB from 'firebase/database';

export default {
  setup() {
    const works = ref([]);

    const fetchList = async () => {
      const response = await fireDB.get(
        fireDB.child(fireDB.ref(fireDB.getDatabase()), 'works')
      );

      works.value = response.val();
    };

    onMounted(async () => {
      await fetchList();

      await ScrollReveal().reveal('.works__title', {
        delay: 100,
        distance: '30px',
      });
      await ScrollReveal().reveal('.cards__item', {
        delay: 300,
        distance: '30px',
      });
    });

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
