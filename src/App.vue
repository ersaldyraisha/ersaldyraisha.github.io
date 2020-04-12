<template>
  <div id="app" class="app">
    <div
      class="app__figure"
      @mouseover="isImageOnHover = true"
      @mouseleave="isImageOnHover = false"
    >
      <img
        src="@/assets/img/raisha-the-css-guy.jpg"
        alt="raisha-the-css-guy"
        class="app__img"
        :class="{'app__img--active': isImageOnHover}"
      >
    </div>
    <ui-sidebar class="app__sidebar"></ui-sidebar>
    <transition name="page-slide-up">
      <router-view class="app__content"/>
    </transition>
  </div>
</template>

<script>
import UiSidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    UiSidebar,
  },
  data() {
    return {
      isImageOnHover: false,
    };
  },
};
</script>

<style lang="scss">
  .app {
    display: flex;
    background: $color-base;

    &__sidebar {
      flex-shrink: 0;
    }

    &__content {
      flex-grow: 1;
      height: 100vh;
      overflow-y: auto;
    }

    &__figure {
      position: absolute;
      top: 50px;
      right: 50px;
      z-index: z-index(navbar);
      background: $color-light;
      height: 120px;
      width: 120px;
      border-radius: 100px;
      overflow: hidden;
      cursor: pointer;
    }

    &__img {
      width: 100%;
      transform: translateY(45px);
      transition: transform .3s ease-out;

      &--active {
        transform: translateY(0);
      }
    }
  }
</style>
