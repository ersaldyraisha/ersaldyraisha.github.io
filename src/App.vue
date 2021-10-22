<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const transitionName = computed(() => {
  if (route.name === 'home') return 'unreveal';
  return 'reveal';
});
</script>

<style scoped></style>
