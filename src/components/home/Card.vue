<template>
  <router-link
    tag="li"
    :to="{ name: 'project', query: { id: data.id } }"
    class="card__item"
    :style="{ backgroundColor: data.backgroundColor }"
    @click="$emit('card-click', data)"
  >
    <img :src="data.img[0]" alt="project" class="card__image" />
    <div class="card__text" :style="{ backgroundColor: data.backgroundColor }">
      <h4 class="card__title">{{ data.name }}</h4>
      <p class="card__description">{{ data.type }}</p>
      <p class="card__detail">
        {{ data.desc }}
      </p>
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
    display: block;
    width: 100%;
    background: $color-overlay;
    border-radius: $radius;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      .card__text {
        height: 250px;
      }

      .card__detail {
        opacity: 1;
      }

      .card__image {
        transform: translateY(-20px);
      }

      .button {
        opacity: 1;
        transform: translateX(0);
        transition-delay: 0.2s;
      }
    }
  }

  &__image {
    width: 100%;
    border-radius: $radius;
    margin-bottom: 110px;
    object-fit: cover;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  &__text {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 112px;
    border-radius: $radius;
    padding: 30px;
    transition: all 0.3s ease;
  }

  &__title {
    font-size: 30px;
  }

  &__description {
    font-size: 18px;
    font-weight: 400;
  }

  &__detail {
    opacity: 0;
    margin-top: 20px;
    font-weight: 400;
    font-size: 14px;
    transition: opacity 0.2s ease;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
