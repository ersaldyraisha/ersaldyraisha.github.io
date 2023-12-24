<template>
  <li>
    <router-link
      :to="{ name: 'project', query: { id: data.id } }"
      class="card__item"
      :style="{ backgroundColor: data.backgroundColor }"
      @click="$emit('card-click', data)"
    >
      <img :src="data.img[0]" alt="project" class="card__image" />
      <div
        class="card__text"
        :style="{ backgroundColor: data.backgroundColor }"
      >
        <h4 class="card__title">{{ data.name }}</h4>
        <p class="card__description">{{ data.type }}</p>

        <ul class="chips" :style="{ color: data.backgroundColor }">
          <li class="chips__item" v-for="role in data.tech">
            {{ role }}
          </li>
        </ul>

        <!-- <p class="card__detail">
          {{ data.desc }}
        </p> -->

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
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
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
          height: 200px;
        }

        .card__detail {
          opacity: 1;
        }

        .card__image {
          transform: translateY(-30px);
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
    transition: transform 0.3s ease;
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
    padding: 20px 30px 30px;
    transition: all 0.3s ease;

    @media screen and (max-width: 960px) {
      padding: 8px 12px;
      height: 55px;
    }
  }

  &__title {
    font-size: 30px;

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

  &__detail {
    opacity: 0;
    margin-top: 20px;
    font-weight: 400;
    line-height: 1.5;
    transition: opacity 0.2s ease;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
