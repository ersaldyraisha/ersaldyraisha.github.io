<template>
  <div class="homepage">
    <app-headline />
    <app-works />
    <app-footer />
  </div>
</template>

<script setup>
import AppHeadline from '@/components/home/Headline.vue';
import AppWorks from '@/components/home/Works.vue';
import AppFooter from '@/components/Footer.vue';
</script>

<style lang="scss" scoped>
.homepage {
  display: block;
}
</style>
