<template>
  <li>
    <router-link
      :to="{ name: 'project', query: { id: data.id } }"
      class="card__item"
      :style="{ backgroundColor: data.backgroundColor }"
      @click="$emit('card-click', data)"
    >
      <img :src="imgUrl" alt="project" class="card__image" />
      <div
        class="card__text"
        :style="{ backgroundColor: data.backgroundColor }"
      >
        <h4 class="card__title">{{ data.name }}</h4>
        <p class="card__description">{{ data.type }}</p>

        <ul class="chips" :style="{ color: data.backgroundColor }">
          <li
            v-for="tech in data.tech"
            :key="`tech-stack-${tech}-${data.id}`"
            class="chips__item"
          >
            {{ tech }}
          </li>
        </ul>

        <button class="button">
          <span class="button__text">See more</span>
          <img
            class="button__icon"
            src="@/assets/img/icons/arrow.png"
            alt="arrow"
          />
        </button>
      </div>
    </router-link>
  </li>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const imgUrl = computed(() => {
      const file = props.data.img[0];

      if (!file) return '';
      try {
        return new URL(`../../assets/img/${file}`, import.meta.url).href;
      } catch (e) {
        return '';
      }
    });

    return { imgUrl };
  },
};
</script>

<style lang="scss" scoped>
$radius: 30px;

.card {
  &__item {
    position: relative;
    z-index: z-index(content);
    display: block;
    width: 100%;
    background: $color-overlay;
    border-radius: $radius;
    cursor: pointer;
    overflow: hidden;

    @media screen and (max-width: 960px) {
      border-radius: 20px;
    }

    @media screen and (min-width: 961px) {
      &:hover {
        .card__text {
          height: 220px;
        }

        .card__image {
          transform: translateY(-30px) scale(1.05);
          opacity: 0.5;
        }

        .button {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.2s;
        }
      }
    }
  }

  &__image {
    width: 100%;
    border-radius: $radius;
    margin-bottom: 100px;
    object-fit: cover;
    transform: translateY(0);
    transition: transform 0.3s ease, opacity 0.5s ease;
    object-fit: cover;

    @media screen and (max-width: 960px) {
      margin-bottom: 55px;
      height: 150px;
      border-radius: 20px;
    }
  }

  &__text {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    border-radius: $radius;
    padding: 20px 30px;
    transition: all 0.3s ease;

    @media screen and (max-width: 960px) {
      padding: 8px 12px;
      height: 55px;
    }
  }

  &__title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 0 0 auto; // or flex-shrink: 0;
    line-height: 1.2; // ensure non-zero line box
    width: 100%;

    @media screen and (max-width: 960px) {
      font-size: 16px;
    }
  }

  &__description {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 25px;

    @media screen and (max-width: 960px) {
      font-size: 12px;
    }
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  gap: 5px;

  &__item {
    background: white;
    padding: 5px 10px;
    border-radius: 100px;
  }
}

.button {
  margin-top: auto;
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;

  &__text {
    font-size: 14px;
    display: inline-block;
    margin-right: 10px;
  }

  &__icon {
    height: 20px;
    vertical-align: middle;
    transform: rotate(90deg);
  }
}
</style>
