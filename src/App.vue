<template>
  <div id="app" class="app">
    <ui-sidebar class="app__sidebar"></ui-sidebar>
    <router-view class="app__content"/>
  </div>
</template>

<script>
import UiSidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    UiSidebar,
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/main";

  .app {
    display: flex;

    &__sidebar {
      flex-shrink: 0;
    }

    &__content {
      flex-grow: 1;
    }
  }
</style>
